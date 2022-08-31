import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  runLogin() {
    this.loginService.login(
      this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value,
    ).subscribe(loginResponse => {
        this.loginForm.reset()

        if (loginResponse.jwt != "") {
          this.loginService.setLoggedIn(loginResponse);
          this.router.navigate(['/']);
        }
      }
    )
  }


}
