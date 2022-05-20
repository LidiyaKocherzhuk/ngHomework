import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentsResolver, CommentResolver, CommentsGuard} from './services';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    canActivate: [CommentsGuard],
    canDeactivate: [CommentsGuard],
    children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {commentData: CommentResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
