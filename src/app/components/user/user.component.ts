import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IUser} from '../../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getDetails(user: IUser) {
    this.router.navigate(
      ['user-details', user.id],
      {
        relativeTo: this.activatedRoute,
        state: {data: user}
      })
  }
}
