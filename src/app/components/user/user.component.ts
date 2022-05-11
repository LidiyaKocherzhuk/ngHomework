import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IPost} from "../../models/post.interface";
import {IUser} from "../../models/user.inteface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;
  posts: IPost[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUserPosts(this.user.id)
      .subscribe(response => this.posts = response);

  }

}
