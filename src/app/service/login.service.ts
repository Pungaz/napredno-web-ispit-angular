import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {LoginResponse} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly BASE_URL = environment.authApi;

  constructor(private httpClient: HttpClient) {
  }

  // getLoginResponse(params: HttpParams): Observable<LoginResponse> {
  //   return this.httpClient.post<LoginResponse>(`${this.BASE_URL}/login`, {params: params}).pipe(catchError(this.handleError))
  // }


  getLoginResponse(username: string, password: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.BASE_URL}/login`, {
      username: username,
      password: password,
    })
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }}
