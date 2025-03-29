import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }

  public insertProject(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/project/create-project-with-multi",user);
  }

  public getProject():Observable<any>{
    return this.http.get("http://localhost:9494/project/get-all-projects")
  }

  public getProjectById(id:any):Observable<any>{
    return this.http.get(`http://localhost:9494/project/get-project-by-id/${id}`)
  }

  public updateProject(user:FormData):Observable<any>{
    return this.http.put("http://localhost:9494/project/update-project",user)
  }

  public deleteProject(id:any){
    return this.http.delete(`http://localhost:9494/project/delete-project/${id}`)
  }
}
