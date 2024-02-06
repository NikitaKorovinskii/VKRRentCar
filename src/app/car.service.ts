import {Injectable} from "@angular/core";

@Injectable()
export class CarService {
  cars: any[] = [];

  getCar() {
    return this.cars;
  }
  addCar(car: any[]){
    this.cars =car;
  }
}
