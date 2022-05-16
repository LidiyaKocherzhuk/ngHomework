import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services';
import {IUser} from '../../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css', '../../components/posts/posts.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => this.users = response);
  }

}
