import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {CarsService} from '../../services';
import {ICar} from '../../interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['../../styles/styleForFormBloc.css','./cars.component.css']
})
export class CarsComponent implements OnInit {

  form: FormGroup;
  cars: ICar[];
  carForUpdate: ICar | null;

  constructor(private carsService: CarsService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(response => {
      this.cars = response
    });
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
        1990,
        [
          Validators.min(1990),
          Validators.max(new Date().getFullYear())
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
    if (!this.carForUpdate) {

      this.carsService.create(this.form.value).subscribe(value => this.cars.push(value));

    } else {

      this.carsService.update(this.carForUpdate.id, this.form.value).subscribe(response => {
        console.log(response);
        this.cars.forEach(item => {
          if (response.id === item.id) {
            Object.assign(item, response)
          }
        })
        this.carForUpdate = null;
      });

    }
      this.form.reset();

  }

  deleteEmit(carEmit: ICar | null) {
    const index = this.cars.findIndex(car => car.id === carEmit?.id);
    this.cars.splice(index, 1);
  }

  updateEmit(car: ICar | null) {
    this.carForUpdate = car;
    this.form.setValue({model: car?.model, year: car?.year, price: car?.price});
  }
}
