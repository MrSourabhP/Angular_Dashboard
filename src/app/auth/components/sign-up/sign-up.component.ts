import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor (private service:AuthService){}

  form : FormGroup = new FormGroup({
    "name" : new FormControl(""),
    "email" : new FormControl(""),
    "password" : new FormControl("")
  })

  formSubmit(){
    this.service.register(this.form.value).subscribe(res => {
      console.log(res);

    })


  }

}
