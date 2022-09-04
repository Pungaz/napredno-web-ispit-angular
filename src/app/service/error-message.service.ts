import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ErrorMessage, Machine} from "../model";

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  private readonly BASE_URL = environment.errorApi;

  constructor(private httpClient: HttpClient) {
  }

  readAll(): Observable<ErrorMessage[]> {
    return this.httpClient.get<ErrorMessage[]>(`${this.BASE_URL}/all`, {})
  }
}
