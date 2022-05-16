import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {IPost} from '../../models';
import {PostService} from '../../services';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input()
  postDetail: IPost;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>
      this.postService.getPost(id).subscribe(response => this.postDetail = response));

  }

}
