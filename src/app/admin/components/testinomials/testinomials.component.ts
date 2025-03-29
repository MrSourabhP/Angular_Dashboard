import { FormControl, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-testinomials',
  templateUrl: './testinomials.component.html',
  styleUrl: './testinomials.component.css'
})
export class TestinomialsComponent {

  constructor(private readonly service:TestService){}

  selectedFile:File | undefined

  form : FormGroup = new FormGroup({
    clientname : new FormControl(''),
    projectname : new FormControl(''),
    feedback : new FormControl(''),
    image5 : new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  formSubmit(){
    const formData = this.createTestData(this.form.value)
    this.service.insertTest(formData).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

  createTestData(formValue:any):FormData{
    const formData = new FormData();

    formData.append('clientname', formValue.clientname)
    formData.append('projectname', formValue.projectname)
    formData.append('feedback', formValue.feedback)
    if(this.selectedFile){
      formData.append('image5',this.selectedFile, this.selectedFile.name)
    }
    return formData;
  }

}
