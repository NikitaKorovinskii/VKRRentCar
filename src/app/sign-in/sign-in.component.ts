import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatToolbarModule, MatCardModule, MatButtonModule, RouterLink],
})
export class SignInComponent  {
  constructor(private route: Router) {
  }
  public username = '';
  public password = '';


  signIn(username: string, password: string) {
    this.username = username
    this.password = password
    alert(username+"   "+password)
    this.route.navigate(['/'])

  }
}
