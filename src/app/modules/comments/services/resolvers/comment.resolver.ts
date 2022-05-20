import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IComment} from '../../interfaces';
import {CommentsService} from '../comments.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {

  constructor(private commentsService: CommentsService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {

    const state = this.router.getCurrentNavigation()?.extras.state;

    if (state) {
      console.log(state['data'])
      return state['data'] as IComment;
    } else {
      console.log(activatedRouteSnapshot.params['id'])
      return this.commentsService.getById(activatedRouteSnapshot.params['id']);
    }
  }
}
