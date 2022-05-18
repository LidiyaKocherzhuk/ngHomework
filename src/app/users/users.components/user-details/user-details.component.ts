import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IUser} from '../../models';
import {UsersService} from '../../services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state;

      if (state) {
        this.userDetails = state['data'] as IUser;
      } else {
        this.usersService.getById(id).subscribe(response => this.userDetails = response);
      }
    });
  }

}
