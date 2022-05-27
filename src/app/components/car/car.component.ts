import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ICar} from '../../interfaces';
import {CarsService} from '../../services';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: ICar;
  @Output()
  deleteEmitter = new EventEmitter<ICar | null>()
  @Output()
  updateEmitter = new EventEmitter<ICar | null>()

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
  }

  delete(): void {
    this.carsService.delete(this.car.id).subscribe(() => {
      this.deleteEmitter.emit(this.car)
    });
  }

  update() {
    this.updateEmitter.emit(this.car)
  }
}
