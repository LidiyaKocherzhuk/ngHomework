import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IUser} from '../../models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(() => {
      // this.userDetails = history.state.data as IUser;
        // @ts-ignore
      this.userDetails = this.router.getCurrentNavigation().extras.state['data'] as IUser;
    });
  }

  ngOnInit(): void {

  }

}
