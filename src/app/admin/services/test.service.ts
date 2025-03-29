import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private readonly http:HttpClient) { }

  public insertTest(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/testinomial/create-test-with-multi",user)
  }

  public getTesti():Observable<any>{
    return this.http.get("http://localhost:9494/testinomial/get-all-testinomials")
  }

  public getTestById(id:any):Observable<any>{
    return this.http.get(`http://localhost:9494/testinomial/get-testinomail-by-id/${id}`)
  }

  public updateTesti(user:FormData):Observable<any>{
    return this.http.put("http://localhost:9494/testinomial/update-testinomial",user)
  }
}
