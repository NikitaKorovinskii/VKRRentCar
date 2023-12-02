import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
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

  visibleCars = this.cars.slice(0, 4);

  loadMore() {
    const loadCount = 4;
    const currentCount = this.visibleCars.length;
    const nextIndex = currentCount + loadCount;
    const nextCars = this.cars.slice(currentCount, nextIndex);
    this.visibleCars.push(...nextCars);
  }
}
