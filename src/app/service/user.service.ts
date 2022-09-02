import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponse, Permission, User} from "../model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL = environment.userApi;

  constructor(private httpClient: HttpClient) {
  }

  create(username: string, password: string, firstname: string, lastname: string, address: string, permissions: Permission[]): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.BASE_URL}/create`, {
      username: username.trim(),
      password: password.trim(),
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      address: address.trim(),
      permissions: permissions,
    })
  }

  read(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.BASE_URL}/read`, {
    })
  }

}
