import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {config} from '../config';
import {IPost} from '../models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${config.url}posts`)
  }
  getPost(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(`${config.url}posts/${id}`);
  }
}
