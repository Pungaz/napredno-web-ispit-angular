import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './component/app/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './component/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./component/home/home.component";
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSliderModule} from "@angular/material/slider";
import {MatRippleModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {UserCreateComponent} from './component/user-create/user-create.component';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import {JwtInterceptorService} from "./interceptor/jwt-interceptor.service";
import { UserReadComponent } from './component/user-read/user-read.component';
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { UserDeleteComponent } from './component/user-delete/user-delete.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    UserCreateComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
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
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ], bootstrap: [NavbarComponent]
})
export class AppModule {
}
