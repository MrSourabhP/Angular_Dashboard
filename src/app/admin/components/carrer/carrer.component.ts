import { FormControl, FormGroup } from '@angular/forms';

import { CarrerService } from '../../services/carrer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrl: './carrer.component.css'
})
export class CarrerComponent {

  constructor(private readonly service:CarrerService){}

  form: FormGroup = new FormGroup({
    role : new FormControl(''),
    skill : new FormControl(''),
    experience : new FormControl(''),
    vacancy : new FormControl(''),
    joblocation : new FormControl(''),
    description : new FormControl('')
  })

  formSubmit(){
    const formData = this.createFormData(this.form.value)
    this.service.insertCarrer(formData).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

  createFormData(formValue:any):FormData{
    const formData = new FormData();

    formData.append('role', formValue.role);
    formData.append('skill', formValue.skill);
    formData.append('experience',formValue.experience);
    formData.append('vacancy', formValue.vacancy);
    formData.append('joblocation', formValue.joblocation);
    formData.append('description',formValue.description);
    return formData;
  }






}



