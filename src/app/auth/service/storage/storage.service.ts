import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveUser(user:any){
    if(typeof window != 'undefined'){
      window.localStorage.setItem("user", JSON.stringify(user))
    }
  }

  public getUser(){
    if(typeof window != 'undefined'){
      let user = window.localStorage.getItem("user")
      if(user!=null){
        return JSON.parse(user)
      }
    }
  }

  public getToken(){
    let user = this.getUser()
    if(user != null){
      return user.token
    }
  }

  public saveToken(token:any){
    if(typeof window != 'undefined'){
      window.localStorage.setItem("token",token)
    }
  }

  public getRole(){
    let user = this.getUser()
    if(user != null){
      return user.role;
    }
  }

  public logout(){
    if(typeof window != 'undefined'){
      window.localStorage.removeItem("admin")
      window.localStorage.removeItem("token")
    }
  }
}
