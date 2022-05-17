import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IComment} from '../../models';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(() => {
      const state = this.router.getCurrentNavigation()?.extras.state

      if (state) {
        this.commentDetails = state['data'] as IComment;
      }

    })
  }

}
