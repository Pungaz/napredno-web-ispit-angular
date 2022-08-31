import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './component/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./component/home/home.component";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSliderModule} from "@angular/material/slider";
import {MatRippleModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {UserCreateComponent} from './component/user-create/user-create.component';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSliderModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ], bootstrap: [AppComponent]
})
export class AppModule {
}
