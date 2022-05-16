import { Component, OnInit } from '@angular/core';

import {PostService} from '../../services';
import {IPost} from '../../models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];
  status: false;

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(response => this.posts = response);
  }

}
