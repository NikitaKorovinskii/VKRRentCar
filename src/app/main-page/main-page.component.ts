import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {RentCarDialogComponent} from "../rent-car-dialog/rent-car-dialog.component";
import {CommonModule, NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, NgOptimizedImage, NgForOf, CommonModule],

})
export class MainPageComponent {
  constructor(public dialog: MatDialog){}

  cars = [
    {
      name: 'Toyota Camry',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    },
    {
      name: 'Nissan Juke',
      seats: 5,
      transmission: 'Manual',
      price: 49.99
    },
    {
      name:  'Ford F150',
      seats: 6,
      transmission: 'Auto',
      price: 69.99
    },
    {
      name: 'Volkswagen Jetta',
      seats: 5,
      transmission: 'Auto',
      price: 39.99
    },
    {
      name: 'Dodge Charger',
      seats: 5,
      transmission: 'Auto',
      price: 79.99
    },
    {
      name: 'Honda Civic',
      seats: 5,
      transmission: 'Manual',
      price: 29.99
    },
    {
      name: 'Toyota RAV4',
      seats: 5,
      transmission: 'Auto',
      price: 49.99
    },
    {
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'Auto',
      price: 99.99
    },
    {
      name: 'Chevrolet Malibu',
      seats: 5,
      transmission: 'Auto',
      price: 69.99
    },
    {
      name: 'Ford Escape',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    },
    {
      name: 'Subaru Outback',
      seats: 5,
      transmission: 'Auto',
      price: 149.99
    },
    {
      name: 'Toyota RAV4',
      seats: 5,
      transmission: 'Auto',
      price: 49.99
    },
    {
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'Auto',
      price: 99.99
    },
    {
      name: 'Chevrolet Malibu',
      seats: 5,
      transmission: 'Auto',
      price: 69.99
    },
    {
      name: 'Ford Escape',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    }, {
      name: 'Toyota RAV4',
      seats: 5,
      transmission: 'Auto',
      price: 49.99
    },
    {
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'Auto',
      price: 99.99
    },
    {
      name: 'Chevrolet Malibu',
      seats: 5,
      transmission: 'Auto',
      price: 69.99
    },
    {
      name: 'Ford Escape',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    }, {
      name: 'Toyota RAV4',
      seats: 5,
      transmission: 'Auto',
      price: 49.99
    },
    {
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'Auto',
      price: 99.99
    },
    {
      name: 'Chevrolet Malibu',
      seats: 5,
      transmission: 'Auto',
      price: 69.99
    },
    {
      name: 'Ford Escape',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    }, {
      name: 'Toyota RAV4',
      seats: 5,
      transmission: 'Auto',
      price: 49.99
    },
    {
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'Auto',
      price: 99.99
    },
    {
      name: 'Chevrolet Malibu',
      seats: 5,
      transmission: 'Auto',
      price: 69.99
    },
    {
      name: 'Ford Escape',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    },
  ];

  visibleCars = this.cars.slice(0, 6);
  loadMoreButton = true;
  allCars: string = 'Показать все';
  countAllCarsButton: number = 0;


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
    this.loadVisibleCars(6);
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

  openRentCarDialog() {
    this.dialog.open(RentCarDialogComponent);
  }
}

