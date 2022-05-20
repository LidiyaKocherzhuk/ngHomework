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
export class PostsResolver implements Resolve<IPost[]> {
    constructor(private postsService: PostsService) {
    }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
      return this.postsService.getAll();
  }

}
