import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IComment} from '../../interfaces';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentData}) => {
      console.log(commentData)
      this.commentDetails = commentData
    });
  }

}
