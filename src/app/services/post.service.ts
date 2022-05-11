import { Injectable } from '@angular/core';
import {Config} from "../config/config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  comment: IComment;

  constructor(private httpClient: HttpClient) {
  }

  getPostComments(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${Config.url}posts/${id}/comments`)
  }
}
