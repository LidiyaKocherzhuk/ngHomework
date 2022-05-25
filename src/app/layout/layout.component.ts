import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../services";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isAuthorization: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAuthorization = !!this.authService.getToken();
    console.log(this.isAuthorization)
  }

}
