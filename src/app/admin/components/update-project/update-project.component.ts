import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrl: './update-project.component.css'
})
export class UpdateProjectComponent implements OnInit{


constructor(private readonly service:ProjectService,
    private readonly router:Router,
    private readonly route:ActivatedRoute
  ){}

  projectId : string | null | undefined

  project = {
    id:"",
    description:"",
    image2:""
    }


  ngOnInit():void{
    this.route.paramMap.forEach(r=>{
      this.projectId = r.get("id")
    })

    this.service.getProjectById(this.projectId).subscribe(res=>{
      this.project = res;
      console.log(res);

      this.form.get("id")?.setValue(this.project.id)
      this.form.get("description")?.setValue(this.project.description)
      this.form.get("image2")?.setValue(this.project.image2)
    })
  }

  selectedFile:File | undefined

  form : FormGroup = new FormGroup({
    id : new FormControl(''),
    description : new FormControl(''),
    image2 : new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    const formData = this.updateProjectData(this.form.value)
    this.service.updateProject(formData).subscribe(res=>{
      this.router.navigate(["/admin/all-project"])
      //console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  updateProjectData(formValue:any):FormData{
    const formData = new FormData();
    formData.append('id', formValue.id);
    formData.append('description', formValue.description);
    if(this.selectedFile){
      formData.append('image2', this.selectedFile, this.selectedFile.name);
    }
    return formData;
  }
}
