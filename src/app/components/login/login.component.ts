import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../styles/styles.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.pattern('(^[a-z])[a-z0-9!@#$%^&*]{2,20}$')
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9!@#$%^&*]{2,20}$')
      ])
    })
  }

  login() {
    this.authService.login(this.form.value).subscribe(response => {
      this.authService.setToken(response);
      this.router.navigate(['cars'], {state: {active: true}});
    });
  }
}
