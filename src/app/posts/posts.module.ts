import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.components/posts/posts.component';
import { PostComponent } from './posts.components/post/post.component';
import {PostDetailsComponent} from './posts.components/post-details/post-details.component';
import {PostsService} from './services';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
