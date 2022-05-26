import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ICar} from '../interfaces';
import {urls} from '../config';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  create(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, car);
  }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars);
  }

  getById(id: number | undefined): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`);
  }

  delete(id: number | undefined): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}/${id}`);
  }

  update(id: number | undefined, car: Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(`${urls.cars}/${id}`, car);
  }

}
