import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule, MatDateRangePicker} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";
import {range} from "rxjs";
interface Car {
  id: number;
  name: string;
  seats: number;
  transmission: string;
  price: number;
}

@Component({
  selector: 'app-rent-car-dialog',
  templateUrl: './rent-car-dialog.component.html',
  styleUrls: ['./rent-car-dialog.component.css'],
  standalone: true,
  imports: [
    // ..
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    JsonPipe,
    ReactiveFormsModule,
    NgIf
  ],
})
export class RentCarDialogComponent implements OnInit{
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  carId: number;
  cars = [
    {
      id: 1,
      name: 'Toyota Camry',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    },
    {
      id: 2,
      name: 'Nissan Juke',
      seats: 5,
      transmission: 'Manual',
      price: 49.99
    },
    {
      id: 3,
      name:  'Ford F150',
      seats: 6,
      transmission: 'Auto',
      price: 69.99
    },
    {
      id: 4,
      name: 'Volkswagen Jetta',
      seats: 5,
      transmission: 'Auto',
      price: 39.99
    },
    {
      id: 5,
      name: 'Dodge Charger',
      seats: 5,
      transmission: 'Auto',
      price: 79.99
    },
    {
      id: 6,
      name: 'Honda Civic',
      seats: 5,
      transmission: 'Manual',
      price: 29.99
    },
    {
      id: 7,
      name: 'Toyota RAV4',
      seats: 5,
      transmission: 'Auto',
      price: 49.99
    },
    {
      id: 8,
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'Auto',
      price: 99.99
    },
    {
      id: 9,
      name: 'Chevrolet Malibu',
      seats: 5,
      transmission: 'Auto',
      price: 69.99
    },
    {
      id: 10,
      name: 'Ford Escape',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    },
    {
      id: 11,
      name: 'Subaru Outback',
      seats: 5,
      transmission: 'Auto',
      price: 149.99
    },
    {
      id: 12,
      name: 'Toyota RAV4',
      seats: 5,
      transmission: 'Auto',
      price: 49.99
    },
    {
      id: 13,
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'Auto',
      price: 99.99
    },
    {
      id: 14,
      name: 'Chevrolet Malibu',
      seats: 5,
      transmission: 'Auto',
      price: 69.99
    },
    {
      id: 15,
      name: 'Ford Escape',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    }, {
      id: 16,
      name: 'Toyota RAV4',
      seats: 5,
      transmission: 'Auto',
      price: 49.99
    },
    {
      id: 17,
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'Auto',
      price: 99.99
    },
    {
      id: 18,
      name: 'Chevrolet Malibu',
      seats: 5,
      transmission: 'Auto',
      price: 69.99
    },
    {
      id: 19,
      name: 'Ford Escape',
      seats: 5,
      transmission: 'Auto',
      price: 59.99
    }, {
      id: 20,
      name: 'Toyota RAV4',
      seats: 5,
      transmission: 'Auto',
      price: 49.99
    },
    {
      id: 21,
      name: 'Tesla Model 3',
      seats: 5,
      transmission: 'Auto',
      price: 99.99
    },
  ];
  selectedCar: Car | undefined;
  date: any;
  startDate: Date | null = null;
  endDate: Date | null = null;
  totalPrice: any;



  constructor(public dialogRef: MatDialogRef<RentCarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.carId = data.carId;
  }

  ngOnInit(): void {
    const foundCar = this.cars.find(car => car.id === this.carId);
    if (foundCar) {
      this.selectedCar = foundCar;
    }

    this.range.valueChanges.subscribe(value => {
      this.startDate = value.start;
      this.endDate = value.end;
      if (this.startDate && this.endDate) {
        const numberOfDays = Math.floor((this.endDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24));
        this.totalPrice = Math.round(numberOfDays * (this.selectedCar?.price ?? 0));

      }
    });
}

  cancel() {
    this.dialogRef.close();
  }

  confirm() {
    console.log(this.selectedCar, this.startDate, this.endDate, this.totalPrice);
    this.dialogRef.close();
  }
}
