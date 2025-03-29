import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private readonly http:HttpClient) { }

  public insertTeam(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/team/create-team-with-multi",user)
  }

  public getTeam():Observable<any>{
    return this.http.get("http://localhost:9494/team/get-all-teams")
  }

  public getTeamById(id:any):Observable<any>{
    return this.http.get(`http://localhost:9494/team/get-team-by-id/${id}`)
  }

  public updateTeam(user:FormData):Observable<any>{
    return this.http.put("http://localhost:9494/team/update-team",user)
  }

  public deleteTeam(id:any){
    return this.http.delete(`http://localhost:9494/team/delete-team/${id}`)
  }

}
