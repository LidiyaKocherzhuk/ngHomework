import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../services";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../../styles/styles.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  usernameError: string;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({

      username: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('(^[a-z])[a-z0-9!@#$%^&*]{2,20}$')
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(2), Validators.maxLength(20)]),
      confirmPassword: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(2), Validators.maxLength(20)]),

    }, [this._checkPassword])
  }

  _checkPassword(form: AbstractControl): ValidationErrors | null {

    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return confirmPassword?.value === password?.value ? null : {notSane: true}

  }

  registration(): void {

    const rowValue = this.form.getRawValue();
    delete rowValue.confirmPassword;

    this.authService.createUser(rowValue).subscribe((response) => {
        this.router.navigate(['login'])
      },
      e => this.usernameError = e.error.username[0]);

  }

}
