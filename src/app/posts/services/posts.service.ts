import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment.prod';
import {IPost} from '../models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${environment.baseUrl}/posts`)
  }
  getById(id:string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${environment.baseUrl}/posts/${id}`)
  }
}
