import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from './components/posts/posts.component';
import {PostResolver, PostsResolver, PostsGuard} from './services';
import {PostDetailsComponent} from './components/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {postsData: PostsResolver},
    canActivate: [PostsGuard],
    canDeactivate: [PostsGuard],
    children: [
      {path: ':id', component: PostDetailsComponent, resolve:{postData: PostResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
