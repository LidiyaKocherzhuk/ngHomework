import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IPost} from '../../models';
import {PostsService} from '../../services';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state;

      if (state) {
        this.postDetails = state['data'] as IPost;
      }else {
        this.postService.getById(id).subscribe(response => this.postDetails = response );
      }
    });
  }

}
