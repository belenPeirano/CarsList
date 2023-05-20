import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  constructor(private carService: CarService) {}

  addForm = new FormGroup({
    model : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    type : new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })

  addCar(addForm: FormGroup) {
    this.carService.addCar(addForm.value.model, addForm.value.description, addForm.value.type, addForm.value.image);
  }
  
}
