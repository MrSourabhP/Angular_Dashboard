import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company-service',
  templateUrl: './company-service.component.html',
  styleUrl: './company-service.component.css'
})
export class CompanyServiceComponent {

  constructor(private readonly service :AuthService){}

  selectedFile:File | undefined

  form: FormGroup = new FormGroup({
    projectname : new FormControl(''),
    projectsummary : new FormControl(''),
    image : new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

   formSubmit(){
    const formData = this.createFormData(this.form.value)
    this.service.insert(formData).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    })
   }

   createFormData(formValue:any):FormData{
     const formData = new FormData();

     formData.append('projectname', formValue.projectname);
     formData.append('projectsummary', formValue.projectsummary);
     if(this.selectedFile){
       formData.append('image',this.selectedFile, this.selectedFile.name);
     }

     return formData;
   }

}
