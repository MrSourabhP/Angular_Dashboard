import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private readonly http:HttpClient) { }

  public insertBlog(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9494/blog/create-blog-with-multi",user)
  }

  public getBlog():Observable<any>{
    return this.http.get("http://localhost:9494/blog/get-all-blogs")
  }

  public getBlogById(id:any):Observable<any>{
    return this.http.get(`http://localhost:9494/blog/get-blog-by-id/${id}`)
  }

  public updateBlog(user:FormData):Observable<any>{
    return this.http.put("http://localhost:9494/blog/update-blog",user)
  }

  public deleteBlog(id:any){
    return this.http.delete(`http://localhost:9494/blog/delete-blog/${id}`)
  }
}
