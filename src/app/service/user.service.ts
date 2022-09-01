import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponse} from "../model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL = environment.userApi;

  constructor(private httpClient: HttpClient) {
  }

  create(username: string, password: string, firstname: string, lastname: string, address: string, permissions: []): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.BASE_URL}/create`, {
      username: username.trim(),
      password: password.trim(),
      firstName: firstname.trim(),
      lastName: lastname.trim(),
      address: address.trim(),
      permissions: permissions,
    })
  }

}
