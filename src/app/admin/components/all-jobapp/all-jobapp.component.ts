import { Component, OnInit } from '@angular/core';

import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-jobapp',
  templateUrl: './all-jobapp.component.html',
  styleUrl: './all-jobapp.component.css'
})
export class AllJobappComponent implements OnInit{

  constructor(private readonly service:JobService, private readonly router:Router){}

  job = [
    {
      id:"",
      name:"",
      email:"",
      contact:"",
      address:"",
      position:"",
      skl:"",
      resume:""
    }
  ]

  ngOnInit(): void {
    this.service.getStudent().subscribe(res=>{
      this.job = res;
    },err=>{
      console.log(err);
    })
  }

  fetchResume(id:any):void{
    this.service.getStudentById(id).subscribe((data)=>{
      const fileURL = URL.createObjectURL(data);
      window.open(fileURL, 'blank');
    })
  }

  deleteStudent(id:any){
    this.service.deleteStudent(id).subscribe(res=>{
      if(res){
        this.ngOnInit()
      }
    },err=>{
      console.log(err);

    })

  }



}
