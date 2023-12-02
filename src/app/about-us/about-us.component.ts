import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  imports: [
    MatCardModule
  ],
  standalone: true
})
export class AboutUsComponent {

}
