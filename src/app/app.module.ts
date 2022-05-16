import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {
  CommentComponent,
  CommentsComponent,
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UsersComponent
} from './components';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'posts-page', component: PostsComponent, children: [
          {path: 'post-details/:id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments-page', component: CommentsComponent, children: [
          {path: 'comment-details/:id', component: CommentDetailsComponent}
        ]
      },
      {
        path: 'users-page', component: UsersComponent, children: [
          {path: 'user-details/:id', component: UserDetailsComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
