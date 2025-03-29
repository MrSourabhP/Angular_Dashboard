import { FormControl, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  constructor(private readonly service:TeamService){}

  selectedFile : File | undefined

  form : FormGroup = new FormGroup({
    name : new FormControl(''),
    designation : new FormControl(''),
    email : new FormControl(''),
    memberdesc : new FormControl(''),
    image4 : new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  formSubmit(){
    const formData = this.createTeam(this.form.value)
    this.service.insertTeam(formData).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  createTeam(formValue:any):FormData{
    const formData = new FormData();

    formData.append('name', formValue.name);
    formData.append('designation', formValue.designation);
    formData.append('email', formValue.email);
    formData.append('memberdesc', formValue.memberdesc);
    if(this.selectedFile){
      formData.append('image4', this.selectedFile, this.selectedFile.name);
    }
    return formData;
  }


}
