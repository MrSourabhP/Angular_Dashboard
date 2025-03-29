import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private readonly http:HttpClient) { }

  public getStudent():Observable<any>{
    return this.http.get("http://localhost:9797/student/get-all-student");
  }

  public deleteStudent(id:any){
    return this.http.delete(`http://localhost:9797/student/delete-student/${id}`)
  }

  public getStudentById(id:number):Observable<Blob>{
    return this.http.get(`http://localhost:9797/student/student-resume/${id}`, {responseType: 'blob'});
  }
}
