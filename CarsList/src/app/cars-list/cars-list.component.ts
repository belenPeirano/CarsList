import { Component } from '@angular/core';
import { Car } from '../Interfaces/car-interface';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent {

  cars: Car[] = [];

  constructor(private carService: CarService) {
    this.cars = this.carService.getCars();
  }
}
