import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {url} from '../../config';
import {IComment} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(url.comments);
  }

  getById(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(`${url.comments}/${id}`);
  }
}
