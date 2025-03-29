import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-update-testinomial',
  templateUrl: './update-testinomial.component.html',
  styleUrl: './update-testinomial.component.css'
})
export class UpdateTestinomialComponent {

  constructor(private readonly service:TestService,
    private readonly router:Router,
    private readonly route:ActivatedRoute
  ){}

  testinoId : string | null | undefined

  testino = {
      id:"",
      clientname:"",
      projectname:"",
      feedback:"",
      image5:""
    }


  ngOnInit():void{
    this.route.paramMap.forEach(a=>{
      this.testinoId = a.get("id")
    })

    this.service.getTestById(this.testinoId).subscribe(res=>{
      this.testino = res;
      console.log(res);

      this.form.get("id")?.setValue(this.testino.id)
      this.form.get("clientname")?.setValue(this.testino.clientname)
      this.form.get("projectname")?.setValue(this.testino.projectname)
      this.form.get("feedback")?.setValue(this.testino.feedback)
      this.form.get("image5")?.setValue(this.testino.image5)
    })
  }

  selectedFile:File | undefined

  form : FormGroup = new FormGroup({
    id : new FormControl(''),
    clientname : new FormControl(''),
    projectname : new FormControl(''),
    feedback : new FormControl(''),
    image5 : new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    const formData = this.updateTeamData(this.form.value)
    this.service.updateTesti(formData).subscribe(res=>{
      this.router.navigate(["/admin/all-testinomial"])
      //console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  updateTeamData(formValue:any):FormData{
    const formData = new FormData();
    formData.append('id', formValue.id);
    formData.append('clientname', formValue.clientname);
    formData.append('projectname', formValue.projectname);
    formData.append('feedback', formValue.feedback);
    if(this.selectedFile){
      formData.append('image5', this.selectedFile, this.selectedFile.name);
    }
    return formData;
  }

}


