import { Component, OnInit } from '@angular/core';

import {CarsService} from "../../services";
import {ICar} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  form: FormGroup;
  cars: ICar[];

  constructor(private carsService: CarsService) {
    this.createForm();
    console.log(this.form)
  }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(response => this.cars = response);
  }

  createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-Zа-яА-ЯіІїЇ]{2,20}$')
        ]),
      year: new FormControl(
        1995,
        [
          Validators.min(1990),
          Validators.max(Date.now())
        ]
      ),
      price: new FormControl(
        0,
        [
          Validators.min(0),
          Validators.max(1000000)
        ]
      ),

    })
  }

  save() {
    this.carsService.create(this.form.value).subscribe(value => this.cars.push(value));
  }
}
