import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { SignInComponent } from './sign-in/sign-in.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RentalConditionsComponent } from './rental-conditions/rental-conditions.component';
import {NgOptimizedImage} from "@angular/common";


const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'rental-conditions', component: RentalConditionsComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'about-us', component:AboutUsComponent },
  ]
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    RentalConditionsComponent,

  ],
  imports: [
    AboutUsComponent,
    BrowserModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavbarComponent,
    MatInputModule,
    ReactiveFormsModule,
    SignInComponent,
    SignUpComponent,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
