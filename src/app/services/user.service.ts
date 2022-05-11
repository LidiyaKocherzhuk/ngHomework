import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../models/user.inteface";
import { Config } from '../config/config'
import {IPost} from "../models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(`${Config.url}users`)
  }

  getUserPosts(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${Config.url}users/${id}/posts`)
  }
}
