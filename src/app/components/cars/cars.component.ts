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
  car: ICar;
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

  details(id: number | undefined): void {
    this.carsService.getById(id).subscribe(response => this.car = response);
  }

  delete(id: number | undefined): void {
    this.carsService.delete(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1);
    });
  }

  update(car: ICar) {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price});
  }

}
