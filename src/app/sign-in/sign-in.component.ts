import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import axios from "axios";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatToolbarModule, MatCardModule, MatButtonModule, RouterLink],
})
export class SignInComponent  {
  constructor(private route: Router) {}

  public username = '';
  public password = '';


  //todo Испрвить метод
  signIn(username: string, password: string) {
    axios.post('http://localhost:5155/login', {
      id:1,
      login: username,
      password: password
    })
      .then(response => {
        if (response.status === 200) {
          this.route.navigate(['/']);
        }

      })
      .catch(error => {
        if (error.response.status === 404) {
          console.error('Пользователь не найден');
        } else {
          console.error('Ошибка при отправке запроса:', error.response.data);
        }
      });

  }
}
