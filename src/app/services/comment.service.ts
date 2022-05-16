import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {config} from '../config';
import {IComment} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(`${config.url}comments`)
  }

  getComment(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(`${config.url}comments/${id}`)
  }
}
