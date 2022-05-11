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
  btnStatus: boolean = false;

  constructor(private postService: PostService) {
  }

  onClick() {
    const btnComment = document.getElementsByClassName('comments')[this.post.id-1];
    btnComment.classList.toggle('openComments');

    if (this.btnStatus){
      this.btnStatus = false;
      return;
    }
    this.btnStatus = true;
  }

  ngOnInit(): void {
    this.postService.getPostComments(this.post.id)
      .subscribe(response => this.comments = response);
  }

}
