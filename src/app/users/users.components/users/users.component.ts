import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UsersService} from '../../services';
import {IUser} from '../../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];
  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(response => this.users = response);
  }

}
