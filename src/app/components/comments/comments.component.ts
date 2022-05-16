import {Component, OnInit} from '@angular/core';

import {IComment} from '../../models';
import {CommentService} from '../../services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css', '../posts/posts.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(response => this.comments = response);
  }

}
