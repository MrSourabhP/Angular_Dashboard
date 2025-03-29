import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private readonly service:ProjectService){}

  selectedFile : File | undefined

  form : FormGroup = new FormGroup({
    description : new FormControl(''),
    image2 : new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  formSubmit(){
    const formData = this.createFormData(this.form.value)
    this.service.insertProject(formData).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  createFormData(formValue:any):FormData{
    const formData = new FormData();

    formData.append('description', formValue.description);
    if(this.selectedFile){
      formData.append('image2', this.selectedFile, this.selectedFile.name);
    }
    return formData;
  }


}
