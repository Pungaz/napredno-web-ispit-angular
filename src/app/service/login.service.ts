import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, of, throwError} from "rxjs";
import {LoginResponse} from "../model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoginComponent} from "../component/login/login.component";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) {
  }

  private readonly BASE_URL = environment.authApi;
  isLogin = false;
  permissions: string = "";

  login(username: string, password: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.BASE_URL}/login`, {
      username: username.trim(),
      password: password.trim(),
    })
  }

  public setLoggedIn(loginResponse: LoginResponse) {
    if (loginResponse.jwt != null && loginResponse.jwt != "") {
      this.isLogin = true;

      let token = this.jwtHelper.decodeToken(loginResponse.jwt);
      let permissionsArray: string[] = token["Permissions"];

      for (const permission of permissionsArray) {
        // @ts-ignore
        this.permissions = this.permissions.concat(permission["name"] + ", ");
      }

      localStorage.setItem('token', loginResponse.jwt);
      localStorage.setItem('STATE', 'true');
      localStorage.setItem("PERMISSIONS", this.permissions);
    }
  }

  logout() {
    localStorage.setItem('token', "");
    localStorage.setItem('STATE', "");
    localStorage.setItem('PERMISSIONS', "");
    return of({success: this.isLogin, permissions: this.permissions});
  }

}
