import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {CarService} from "../car.service";
import axios from "axios";


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
    NgIf,
    NgOptimizedImage
  ],
})
export class RentCarDialogComponent implements OnInit{
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  carId: number;
  cars: any[] = [];
  selectedCar: any | undefined;
  date: any;
  startDate: Date | null = null;
  endDate: Date | null = null;
  totalPrice: any;
  numberOfDays: any;

  constructor(public dialogRef: MatDialogRef<RentCarDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private carService: CarService) {
    this.carId = data.carId;
  }

  ngOnInit(): void {
    this.cars = this.carService.getCar();
    const foundCar = this.cars.find(car => car.Id === this.carId);
    if (foundCar) {
      this.selectedCar = foundCar;
    }
    this.range.valueChanges.subscribe(value => {
      this.startDate = value.start;
      this.endDate = value.end;
      if (this.startDate && this.endDate) {
        const startDate =  this.startDate.getDate()+ '.' + (this.startDate.getMonth() + 1) + '.' + this.startDate.getFullYear()
        const endDate =  this.endDate.getDate()+ '.' + (this.endDate.getMonth() + 1) + '.' + this.endDate.getFullYear()
        this.getNumberOfDays(startDate, endDate);
      }
    });
  }
  private getNumberOfDays(startDate: string, endDate: string) {
    axios.post('http://localhost:5155/rentCar', {
      CarId: this.carId,
      startDateRent: startDate,
      endDateRent: endDate
    })
      .then(response => {
        if (response.status === 200) {
          this.numberOfDays = response.data.numberOfDays
          this.totalPrice = response.data.totalPrice
        }

      })

  }
  cancel() {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close();
  }

  filterPastDates(date: Date): boolean {
    const now = new Date();
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(now.getFullYear() + 1);
    return date >= now && date <= oneYearFromNow;
  }
}
