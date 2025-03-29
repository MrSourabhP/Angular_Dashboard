import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http:HttpClient) { }

  public insert(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/company/create-company-with-multipart",user)
  }

  public getCompany():Observable<any>{
    return this.http.get("http://localhost:9494/company/get-all-company")
  }

  public getCompanyById(id:any):Observable<any>{
    return this.http.get(`http://localhost:9494/company/get-company-by-id/${id}`)
  }

  public updateCompany(user:FormData):Observable<any>{
    return this.http.put("http://localhost:9494/company/update-company",user)
  }

  public deleteCompany(id:any){
    return this.http.delete(`http://localhost:9494/company/delete-company/${id}`)
  }


}
