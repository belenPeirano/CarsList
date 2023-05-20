import { Injectable } from '@angular/core';
import { Car } from '../Interfaces/car-interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  CARS: Car[] = [
    {
      model: "Audi",
      description: "Great car",
      type: "Sedan",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    {
      model: "BMW",
      description: "WOOOOOW great car",
      type: "Coupé",
      image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75"
    },
    {
      model: "Fiat",
      description: "Awesome car, i want it!",
      type: "SUV",
      image: "https://fotos.perfil.com/2021/06/02/fiat-pulse-1183467.jpg"
    },
    {
      model: "Ford",
      description: "Family size",
      type: "VAN",
      image: "data:image/jpeg;base64,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"
    }
  ];

  constructor() { }

  getCars(): Car[] {
    return this.CARS;
  }

  addCar(Model: string, Description: string, Type: string, Image: string): boolean {
    const car: Car = { model: Model, description: Description, type: Type, image: Image };
    this.CARS.push(car);
    return true;
  }

  deleteCar(car: Car) {
    const index = this.CARS.findIndex((obj) => {
      return obj.description === car.description;
    });
    this.CARS.splice(index, 1);
  }
}