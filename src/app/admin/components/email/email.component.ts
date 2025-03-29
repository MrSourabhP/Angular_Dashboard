import { FormControl, FormGroup } from '@angular/forms';
import { error, log } from 'node:console';

import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  constructor(private readonly service:EmailService){}

  selectedFile:File | undefined

  form:FormGroup = new FormGroup({
    from:new FormControl(''),
    to:new FormControl(''),
    subject:new FormControl(''),
    body:new FormControl(''),
    file:new FormControl('')
  })

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
}


  formSubmit(){
    console.log(this.form.value);
    const formData = this.createEmail(this.form.value)
    const formData2 = this.createEmails(this.form.value)
    const formData3 = this.createEmailWithFile(this.form.value)


    this.service.sendMail(formData).subscribe(re=>{
      console.log(re);
    },err=>{
      console.log(err);
    })
    this.service.sendMails(formData2).subscribe(r=>{
      console.log(r);
    },err=>{
      console.log(err);
    })
    this.service.sendMailWithAttach(formData3).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

  createEmail(formValue:any):FormData{
    const formData = new FormData();

    formData.append('from', formValue.from);
    formData.append('to', formValue.to);
    formData.append('subject',formValue.subject);
    formData.append('body',formValue.body);
    return formData;
  }

  createEmails(formValue:any):FormData{
    const formData = new FormData();

    formData.append('from', formValue.from);
    formData.append('to', formValue.to);
    formData.append('subject',formValue.subject);
    formData.append('body',formValue.body);
    return formData;
  }

  createEmailWithFile(formValue:any):FormData{
    const formData = new FormData();

    formData.append('from',formValue.from);
    formData.append('to',formValue.to);
    formData.append('subject',formValue.subject);
    formData.append('body',formValue.body);
    if(this.selectedFile){
      formData.append('file',this.selectedFile, this.selectedFile.name);
    }
    return formData;
  }

}
