import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../service/storage/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private service:AuthService, private readonly storage:StorageService, private readonly router:Router){}

  login = {
    username : "",
    password : ""
  }

  form : FormGroup = new FormGroup({
    "username" : new FormControl(""),
    "password" : new FormControl("")
  })

  formSubmit(){
     this.service.login(this.form.value).subscribe(res =>{
      console.log(res)

      this.storage.saveUser(res);
      let user = this.storage.getUser()
      let token = this.storage.getToken()
      this.storage.saveToken(token);
      let role = this.storage.getRole();

      if(user != null && role == "ADMIN"){
        this.router.navigate(["/admin"]);
      } else if (user != null && role == "USER"){
        this.router.navigate(["/"]);
      }



     })


  }
}
