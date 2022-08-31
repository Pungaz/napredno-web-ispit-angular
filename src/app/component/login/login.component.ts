import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpParams} from "@angular/common/http";
import {LoginResponse} from "../../model";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  loginResponse: LoginResponse | undefined;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // runLogin(): void {
  //   let params = new HttpParams()
  //     .set('username', this.loginForm.get('username')?.value)
  //     .set('password', this.loginForm.get('password')?.value)
  //
  //   this.loginService.getLoginResponse(params).subscribe(loginResponse => {
  //     this.loginForm.reset();
  //     this.loginResponse = loginResponse;
  //   }, error => {
  //     alert(`ERROR: ${error.error.message}`);
  //   })
  // }


  runLogin() {
    this.loginService.getLoginResponse(
      this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value,
    ).subscribe(loginResponse => {
      this.loginForm.reset()
      this.loginResponse = loginResponse;

      if (loginResponse.jwt != ""){
        this.router.navigate(['/']);
      }
    })
  }


}
