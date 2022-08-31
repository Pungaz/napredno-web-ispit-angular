import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {of} from "rxjs";
import {LoginService} from "./login.service";
import {LoginResponse} from "../model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, private loginService: LoginService) {
  }

  public isAuthenticated(): boolean {
    const loggedIn = localStorage.getItem('STATE');
    const token = localStorage.getItem('token');

    if (loggedIn && token) {
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  public getPermissions(): string[] {
    const permissions = localStorage.getItem('PERMISSIONS');
    let permissionsArray: string[] = [];

    if (permissions) {
      permissionsArray = permissions.split(", ");
      return permissionsArray;
    }
    return [];
  }


  // isLoggedIn() {
  //   const loggedIn = localStorage.getItem('STATE');
  //   if (loggedIn == 'true')
  //     this.loginService.isLogin = true;
  //   else
  //     this.isLogin = false;
  //   return this.isLogin;
  // }

  // getRole() {
  //   this.roleAs = localStorage.getItem('ROLE');
  //   return this.roleAs;
  // }

}





