import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IPost} from '../../interfaces';
import {PostsService} from '../posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost> {

  constructor(private router: Router, private postsService: PostsService) {
  }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {

    const state = this.router.getCurrentNavigation()?.extras.state;

    if (state) {
      return state['data'] as IPost;
    } else {
      return this.postsService.getById(activatedRouteSnapshot.params['id'])
    }
  }

}
