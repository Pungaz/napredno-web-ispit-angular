import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'napredno-web-ispit-angular';

  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}

