import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CarrerService } from '../../services/carrer.service';

@Component({
  selector: 'app-update-carrer',
  templateUrl: './update-carrer.component.html',
  styleUrl: './update-carrer.component.css'
})
export class UpdateCarrerComponent implements OnInit{

  constructor(private readonly service:CarrerService,
    private readonly router:Router,
    private readonly route:ActivatedRoute
  ){}

  carrerId : string | null | undefined

  carrer = {
    id:"",
    role:"",
    experience:"",
    skill:"",
    vacancy:"",
    joblocation:"",
    description:""
  }

  ngOnInit(): void {
    this.route.paramMap.forEach(j =>{
      this.carrerId = j.get("id")
    })

    this.service.getCarrerById(this.carrerId).subscribe(res=>{
      this.carrer = res;
      console.log(res);

      this.form.get("id")?.setValue(this.carrer.id)
      this.form.get("role")?.setValue(this.carrer.role)
      this.form.get("experience")?.setValue(this.carrer.experience)
      this.form.get("skill")?.setValue(this.carrer.skill)
      this.form.get("vacancy")?.setValue(this.carrer.vacancy)
      this.form.get("joblocation")?.setValue(this.carrer.joblocation)
      this.form.get("description")?.setValue(this.carrer.description)
    })
  }

  form : FormGroup = new FormGroup({
    id : new FormControl(''),
    role : new FormControl(''),
    experience : new FormControl(''),
    skill : new FormControl(''),
    vacancy : new FormControl(''),
    joblocation : new FormControl(''),
    description : new FormControl('')
  })

  onSubmit(){
    const formData = this.updateCarrerData(this.form.value)
    this.service.updateCareer(formData).subscribe(res=>{
      this.router.navigate(["/admin/all-carrer"])
    },err=>{
      console.log(err);
    })
  }

  updateCarrerData(formValue:any):FormData{
    const formData = new FormData();

    formData.append('id',formValue.id);
    formData.append('role',formValue.role);
    formData.append('experience',formValue.experience);
    formData.append('skill',formValue.skill);
    formData.append('vacancy',formValue.vacancy);
    formData.append('joblocation',formValue.joblocation);
    formData.append('description',formValue.description);
    return formData;
  }








}
