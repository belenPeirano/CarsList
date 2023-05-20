import { Component, Input } from '@angular/core';
import { Car } from '../Interfaces/car-interface';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarsComponent {
  @Input() car!: Car;

  constructor(private carService: CarService) { }

  deleteCar(car: Car) {
    this.carService.deleteCar(car);
  }
}
