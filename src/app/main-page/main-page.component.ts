import {Component, OnInit} from '@angular/core';
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
  loadMoreButton = true;
  cookie: any;

  ngOnInit(): void {
    // axios.post('https://52-test-48.cloudbpm.ru/0/odata/UsrCars', {
    //   UserName: '2',
    //   UserPassword: '2',
    // }, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     'ForceUseSession': true,
    //   },
    // })
    //   .then(response => {
    //     // Обработка успешного ответа
    //     console.log('Успешная авторизация!');
    //     console.log('Ответ:', response.headers['set-cookie']);
    //
    //   })
    //   .catch(error => {
    //     // Обработка ошибки
    //     console.error('Ошибка авторизации:', error.response.data.message);
    //   });
    // axios.get("https://52-test-48.cloudbpm.ru/0/odata/UsrCars",
    //   {
    //     headers: {
    //       BPMCSRF: "NmDOHjNn55QTBR.M22KYDu"
    //     }
    //   }
    //   )
    //   .then((response) => {
    //     console.log(response.data)
    //   })
    //   .catch((err: any) => {
    //     console.log(err)
    //   });

    axios.get("http://localhost:5155/cars",
      {
      })
      .then((response) => {
        this.carService.addCar(response.data)
        this.cars = this.carService.getCar()
        this.visibleCars = this.cars.slice(0, 4);
      })
      .catch((err: any) => {
        console.log(err)
      });
  }



  openRentCarDialog(id: number) {
    this.dialog.open(RentCarDialogComponent, {
      data: {
        carId: id
      }
    });
  }
  loadMore() {
    const newLength = this.visibleCars.length + 4;
    this.visibleCars = this.cars.slice(0, newLength);
    this.loadMoreButton = this.visibleCars.length < this.cars.length; // Update button visibility
  }
}

