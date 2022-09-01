import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {LoginResponse} from "../model";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly BASE_URL = environment.authApi;
  isLogin = false;
  permissions: string = "";

  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) {
  }

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

      console.log(permissionsArray)

      if (permissionsArray != null && permissionsArray != []) {
        for (const permission of permissionsArray) {
          // @ts-ignore
          this.permissions = this.permissions.concat(permission["name"] + ", ");
        }
      }

      localStorage.setItem('token', loginResponse.jwt);
      localStorage.setItem('STATE', 'true');
      localStorage.setItem("PERMISSIONS", this.permissions);
    }
  }

  logout() {
    this.isLogin = false;
    this.permissions = "";
    localStorage.removeItem('token');
    localStorage.removeItem('STATE');
    localStorage.removeItem('PERMISSIONS');
    return of({success: this.isLogin, permissions: this.permissions});
  }
}
