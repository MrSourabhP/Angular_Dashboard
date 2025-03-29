import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrerService {

  constructor(private readonly http:HttpClient) { }

  public insertCarrer(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/carrer/create-carrer-with-req",user)
  }

  public getCarrer():Observable<any>{
    return this.http.get("http://localhost:9494/carrer/get-all-carrer")
  }

  public getCarrerById(id:any):Observable<any>{
    return this.http.get(`http://localhost:9494/carrer/get-carrer-by-id/${id}`)
  }

  public updateCareer(user:FormData):Observable<any>{
    return this.http.put("http://localhost:9494/carrer/update-carrer",user)
  }

  public deleteCarrer(id:any){
    return this.http.delete(`http://localhost:9494/carrer/delete-carrer/${id}`)
  }


}
