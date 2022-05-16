import {Component, Input, OnInit} from '@angular/core';

import {IPost} from "../../models/post.interface";
import {PostService} from "../../services/post.service";
import {IComment} from "../../models/comment.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;
  comments: IComment[];
  btnStatus = false;

  constructor(private postService: PostService) {
  }

  onClick() {
      this.btnStatus = !this.btnStatus
  }

  ngOnInit(): void {
    this.postService.getPostComments(this.post.id)
      .subscribe(response => this.comments = response);
  }

}
