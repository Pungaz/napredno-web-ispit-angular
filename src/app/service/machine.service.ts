import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Machine} from "../model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private readonly BASE_URL = environment.machineApi;

  constructor(private httpClient: HttpClient) {
  }

  readAll(): Observable<Machine[]> {
    return this.httpClient.get<Machine[]>(`${this.BASE_URL}/search`, {})
  }

  readByStatus(status: string): Observable<Machine[]> {
    return this.httpClient.get<Machine[]>(`${this.BASE_URL}/search/status/${status}`, {})
  }

  readByName(name: string): Observable<Machine[]> {
    return this.httpClient.get<Machine[]>(`${this.BASE_URL}/search/name/${name}`, {})
  }

  readByDate(startingDate: number, endingDate: number): Observable<Machine[]> {
    return this.httpClient.get<Machine[]>(`${this.BASE_URL}/search/date/${startingDate}/${endingDate}`, {})
  }

  start(machineId: number | undefined, time: number | null): Observable<void> {
    return this.httpClient.put<void>(`${this.BASE_URL}/start/${machineId}?time=${time}`, {})
  }

  stop(machineId: number | undefined, time: number | null): Observable<void> {
    return this.httpClient.put<void>(`${this.BASE_URL}/stop/${machineId}?time=${time}`, {})
  }

  restart(machineId: number | undefined, time: number | null): Observable<void> {
    return this.httpClient.put<void>(`${this.BASE_URL}/restart/${machineId}?time=${time}`, {})
  }

  create(name: string): Observable<Machine> {
    return this.httpClient.post<Machine>(`${this.BASE_URL}/create`, {
      name: name.trim()
    })
  }

  delete(machineId: number) {
    return this.httpClient.put(`${this.BASE_URL}/destroy/${machineId}`, {}, {responseType: 'text'})
  }

}
