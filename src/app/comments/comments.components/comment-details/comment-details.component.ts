import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IComment} from '../../models';
import {CommentsService} from '../../services';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state;

      if (state) {
        this.commentDetails = state['data'] as IComment;
      } else {
        this.commentsService.getById(id).subscribe(response => this.commentDetails = response);
      }
    });
  }
}
