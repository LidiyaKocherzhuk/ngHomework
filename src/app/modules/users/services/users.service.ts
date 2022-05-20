import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {url} from '../../config';
import {IUser} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(url.users);
  }

  getById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${url.users}/${id}`);
  }
}
