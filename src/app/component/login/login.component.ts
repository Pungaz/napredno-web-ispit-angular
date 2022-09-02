import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (!this.authService.isAuthenticated()) {
      this.loginService.login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value,
      ).subscribe(loginResponse => {
          this.loginForm.reset()

          if (loginResponse.jwt != "") {
            this.loginService.setLoggedIn(loginResponse);
            this.router.navigate(['/']);
          }
        }, (error: any) => {
          alert(error.error)
        }
      )
    } else {
      alert("You are already logged in");
    }
  }


}
