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
    const token = this.getToken();

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

  public getToken(): string | null {
    return localStorage.getItem('token');
  }


}





