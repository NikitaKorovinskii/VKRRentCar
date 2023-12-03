import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {RentCarDialogComponent} from "../rent-car-dialog/rent-car-dialog.component";
import {CommonModule, NgForOf, NgOptimizedImage} from "@angular/common";
import {CarService} from "../car.service";
import axios from "axios";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, NgOptimizedImage, NgForOf, CommonModule],

})
export class MainPageComponent implements OnInit {
  constructor(public dialog: MatDialog, private carService: CarService){}

  cars: any[] = [];
  visibleCars: any[] = [];
  loadMoreButton: boolean = true;
  allCars: string = 'Показать все';
  countAllCarsButton: number = 0;
  ngOnInit(): void {
    axios.get("http://localhost:5155/cars",
      {
      })
      .then((res) => {
        this.carService.addIdCar(res.data)
        this.cars = this.carService.getCar()
        this.visibleCars = this.cars.slice(0, 6);
      })
      .catch((err: any) => {
        console.log(err)
      });
  }

  private loadVisibleCars(loadCount: number): void {
    const currentCount = this.visibleCars.length;
    const nextIndex = currentCount + loadCount;
    const nextCars = this.cars.slice(currentCount, nextIndex);
    if (nextCars.length === 0) {
      this.loadMoreButton = false;
      this.loadAll();
    } else {
      this.visibleCars.push(...nextCars);
    }
  }

  loadMore() {
    this.loadVisibleCars(3);
  }

  loadAll() {
    this.visibleCars = this.cars;
    this.countAllCarsButton++;
    if (this.countAllCarsButton === 2) {
      this.allCars = 'Показать все';
      this.loadMoreButton = true;
      this.countAllCarsButton = 0;
      this.visibleCars = this.cars.slice(0, 6);
    } else {
      this.allCars = 'Свернуть';
      this.loadMoreButton = false;
    }
  }

  openRentCarDialog(id: number) {
    this.dialog.open(RentCarDialogComponent, {
      data: {
        carId: id
      }
    });
  }

}

