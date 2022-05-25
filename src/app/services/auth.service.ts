import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../config";
import {IUser} from "../interfaces";
import {IToken} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  createUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user);
  }

  login(user: IUser): Observable<any> {
    return this.httpClient.post<any>(urls.auth, user);
  }

  setToken(token: IToken): void {
    localStorage.setItem('accessToken', token.access)
  }

  getToken(): string | null {
   return localStorage.getItem('accessToken');
  }

}
