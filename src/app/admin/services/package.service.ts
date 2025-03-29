import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private readonly http:HttpClient) { }

  public createPriceWithRqp(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/price/create-price",user)
  }

  public getPackage():Observable<any>{
    return this.http.get("http://localhost:9494/price/get-all-price")
  }

  public getPackageById(id:any):Observable<any>{
    return this.http.get(`http://localhost:9494/price/get-price-by-id/${id}`)
  }

  public updatePackage(user:FormData):Observable<any>{
    return this.http.put("http://localhost:9494/price/update-price",user)
  }

  public deletePackage(id:any){
    return this.http.delete(`http://localhost:9494/price/delete-price/${id}`)
  }
}
