import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private readonly http:HttpClient) { }

  public sendMail(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/email/send-mail",user)
  }

  public sendMails(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/email/send-mails",user)
  }

  public sendMailWithAttach(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/email/send-mail-with-attach",user)
  }
}
