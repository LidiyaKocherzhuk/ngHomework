import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../../environments/environment.prod';
import {ITodo} from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) {
  }

  getByUserId(userId: string): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(`${environment.baseUrl}/todos?userId=${userId}`);
  }
}
