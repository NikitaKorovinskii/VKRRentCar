import {Injectable} from "@angular/core";

@Injectable()
export class CarService {
  cars: any[] = [];

  getCar() {
    return this.cars;
  }
  addIdCar(car: any[]){
    this.cars =car;
  }
}
