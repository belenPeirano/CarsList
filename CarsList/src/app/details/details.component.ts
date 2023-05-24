import { Component, Input, inject } from '@angular/core';
import { Car } from '../Interfaces/car-interface';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() car!: Car;

  route: ActivatedRoute = inject(ActivatedRoute);
  carService = inject(CarService);

  constructor() {
    const carId = Number(this.route.snapshot.params['id']);
    //this.car = this.carService.getCarById(carId);
  }
  
}
