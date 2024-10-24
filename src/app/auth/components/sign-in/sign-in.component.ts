import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private service:AuthService){}

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
      console.log(this.form.value);
     })


  }
}
