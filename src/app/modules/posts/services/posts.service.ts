import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {url} from '../../config';
import {IPost} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(url.posts);
  }

  getById(id: string): Observable<IPost> {
      return this.httpClient.get<IPost>(`${url.posts}/${id}`);
  }
}
