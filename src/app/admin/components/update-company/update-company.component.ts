import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrl: './update-company.component.css'
})
export class UpdateCompanyComponent implements OnInit{

  constructor(private readonly service:AuthService,
    private readonly router:Router,
    private readonly route:ActivatedRoute
  ){}

  companyId : string | null | undefined

  company = {
      id:"",
      projectname:"",
      projectsummary:"",
      image:""
    }


  ngOnInit():void{
    this.route.paramMap.forEach(r=>{
      this.companyId = r.get("id")
    })

    this.service.getCompanyById(this.companyId).subscribe(res=>{
      this.company = res;
      console.log(res);

      this.form.get("id")?.setValue(this.company.id)
      this.form.get("projectname")?.setValue(this.company.projectname)
      this.form.get("projectsummary")?.setValue(this.company.projectsummary)
      this.form.get("image")?.setValue(this.company.image)
    })
  }

  selectedFile:File | undefined

  form : FormGroup = new FormGroup({
    id : new FormControl(''),
    projectname : new FormControl(''),
    projectsummary : new FormControl(''),
    image : new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    const formData = this.updateCompanyData(this.form.value)
    this.service.updateCompany(formData).subscribe(res=>{
      this.router.navigate(["/admin/all-company"])
      //console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  updateCompanyData(formValue:any):FormData{
    const formData = new FormData();
    formData.append('id', formValue.id);
    formData.append('projectname', formValue.projectname);
    formData.append('projectsummary', formValue.projectsummary);
    if(this.selectedFile){
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    return formData;
  }





}
