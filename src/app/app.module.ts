import {NavbarComponent} from "./component/navbar/navbar.component";
import {UserCreateComponent} from "./component/user/user-create/user-create.component";
import {MachineReadComponent} from "./component/machine/machine-read/machine-read.component";
import {MachineReadByDateComponent} from "./component/machine/machine-read-by-date/machine-read-by-date.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {LoginComponent} from "./component/login/login.component";
import {UserUpdateComponent} from "./component/user/user-update/user-update.component";
import {
  MachineReadByStatusComponent
} from "./component/machine/machine-read-by-status/machine-read-by-status.component";
import {UserDeleteComponent} from "./component/user/user-delete/user-delete.component";
import {MachineReadByNameComponent} from "./component/machine/machine-read-by-name/machine-read-by-name.component";
import {UserReadComponent} from "./component/user/user-read/user-read.component";
import {HomeComponent} from "./component/home/home.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {MatSliderModule} from "@angular/material/slider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {JwtInterceptorService} from "./interceptor/jwt-interceptor.service";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {MachineCreateComponent} from './component/machine/machine-create/machine-create.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MachineScheduleActionComponent } from './component/machine/machine-schedule-action/machine-schedule-action.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    UserCreateComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    MachineReadComponent,
    MachineReadByNameComponent,
    MachineReadByStatusComponent,
    MachineReadByDateComponent,
    MachineCreateComponent,
    MachineScheduleActionComponent,
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
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
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
