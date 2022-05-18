import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./users/users.module').then(module => module.UsersModule)},
  {path: 'posts', loadChildren: () => import('./posts/posts.module').then(module => module.PostsModule)},
  {path: 'comments', loadChildren: () => import('./comments/comments.module').then(module => module.CommentsModule)},
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
