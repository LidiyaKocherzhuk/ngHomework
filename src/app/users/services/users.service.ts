import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment.prod';
import {IUser} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]> (`${environment.baseUrl}/users`)
  }

  getById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.baseUrl}/users/${id}`);
  }
}
