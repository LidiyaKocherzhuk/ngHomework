import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment.prod';
import {IComment} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${environment.baseUrl}/comments`)
  }
  getById(id:string): Observable<IComment> {
    return this.httpClient.get<IComment>(`${environment.baseUrl}/comments/${id}`)
  }
}
