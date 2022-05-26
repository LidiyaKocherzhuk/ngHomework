import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import {urls} from "../config";
import {IUser} from "../interfaces";
import {IToken} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  createUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user);
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user);
  }

  setToken(token: IToken): void {
    localStorage.setItem('accessToken', token.access)
    localStorage.setItem('refreshToken', token.refresh)
  }

  getAccessToken(): string | null {
   return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string | null {
   return localStorage.getItem('refreshToken');
  }

  refresh(): Observable<IToken> {
    const refresh = this.getRefreshToken();
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((tokens: IToken) => {
        this.setToken(tokens)
      })
    )
  }

  deleteToken(): void {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }

}
