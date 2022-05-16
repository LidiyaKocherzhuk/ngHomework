import { Component, OnInit } from '@angular/core';

import {IComment} from '../../models';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(() => this.commentDetails = history.state.data as IComment);
  }

}
