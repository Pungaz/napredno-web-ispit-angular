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

  create(username: string, password: string, firstname: string, lastname: string, address: string, permissions: Permission[]): Observable<User> {
    return this.httpClient.post<User>(`${this.BASE_URL}/create`, {
      username: username.trim(),
      password: password.trim(),
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      address: address.trim(),
      permissions: permissions,
    })
  }

  update(id: number | undefined, username: string, password: string, firstname: string, lastname: string, address: string, permissions: Permission[]): Observable<User> {
    return this.httpClient.put<User>(`${this.BASE_URL}/update/${id}`, {
      username: username.trim(),
      password: password.trim(),
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      address: address.trim(),
      permissions: permissions,
    })
  }

  delete(id: number | undefined): Observable<void>{
    return this.httpClient.delete<void>(`${this.BASE_URL}/delete/${id}`);
  }



  read(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.BASE_URL}/read`, {
    })
  }

}
