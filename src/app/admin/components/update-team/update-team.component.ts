import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrl: './update-team.component.css'
})
export class UpdateTeamComponent implements OnInit{

  constructor(private readonly service:TeamService,
    private readonly router:Router,
    private readonly route:ActivatedRoute
  ){}

  teamId : string | null | undefined

  team = {
      id:"",
      name:"",
      designation:"",
      email:"",
      memberdesc:"",
      image4:""
    }


  ngOnInit():void{
    this.route.paramMap.forEach(t=>{
      this.teamId = t.get("id")
    })

    this.service.getTeamById(this.teamId).subscribe(res=>{
      this.team = res;
      console.log(res);

      this.form.get("id")?.setValue(this.team.id)
      this.form.get("name")?.setValue(this.team.name)
      this.form.get("designation")?.setValue(this.team.designation)
      this.form.get("email")?.setValue(this.team.email)
      this.form.get("memberdesc")?.setValue(this.team.memberdesc)
      this.form.get("image4")?.setValue(this.team.image4)
    })
  }

  selectedFile:File | undefined

  form : FormGroup = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    designation : new FormControl(''),
    email : new FormControl(''),
    memberdesc : new FormControl(''),
    image4: new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    const formData = this.updateTeamData(this.form.value)
    this.service.updateTeam(formData).subscribe(res=>{
      this.router.navigate(["/admin/all-team"])
      //console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  updateTeamData(formValue:any):FormData{
    const formData = new FormData();
    formData.append('id', formValue.id);
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
