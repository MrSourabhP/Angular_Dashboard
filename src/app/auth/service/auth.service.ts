import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public login(data:any):Observable<any>{
    return this.http.post(baseUrl + "/api/service/login", data)
  }

  public register(data:any):Observable<any>{
    return this.http.post(baseUrl + "/api/service/create-student", data)
  }
}
