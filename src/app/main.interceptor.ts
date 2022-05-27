import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators'
import {Router} from '@angular/router';

import {AuthService, DataService} from './services';
import {IToken} from './interfaces';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  isRefreshing = false;

  constructor(private authService: AuthService, private router: Router, private dataService: DataService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.authService.getAccessToken();

    if (isAuthenticated) {
      this.dataService.storage.next(true);
      request = this.addToken(request, isAuthenticated);
    }
    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          return this.handle401Error(request, next);
        }
        return throwError(() => new Error('Token invalid or expired'))
      })
    ) as any;
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      return this.authService.refresh().pipe(
        switchMap((tokens: IToken) => {
          return next.handle(this.addToken(request, tokens.access))
        }),

        catchError(() => {
          this.isRefreshing = false;
          this.authService.deleteToken();
          this.router.navigate(['login']);
          return throwError(() => new Error(''))
        }),
      );
    }
  }
}
