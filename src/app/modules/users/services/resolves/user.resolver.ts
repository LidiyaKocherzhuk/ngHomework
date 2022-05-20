import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IUser} from '../../interfaces';
import {UsersService} from '../users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {

  constructor(private usersService: UsersService, private router: Router) {
  }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {

    const state = this.router.getCurrentNavigation()?.extras.state;

    if (state) {
      return state['data'] as IUser;
    } else {
      return this.usersService.getById(activatedRouteSnapshot.params['id']);
    }
  }
}
