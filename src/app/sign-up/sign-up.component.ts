import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonModule
  ]
})
export class SignUpComponent {
  constructor(private route: Router) {
  }
  public username = '';
  public name = '';
  public password = '';
  public RepeatPassword: any;

  signUp(username: string, password: string, name: string) {
    this.username = username
    this.password = password
    this.name = name
    this.route.navigate(['/'])
  }
}
