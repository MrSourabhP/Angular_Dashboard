import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-company',
  templateUrl: './all-company.component.html',
  styleUrl: './all-company.component.css'
})
export class AllCompanyComponent implements OnInit{

  constructor(private  readonly service:AuthService, private readonly router:Router){}

  company = [
    {
      id:"",
      projectname:"",
      projectsummary:"",
      image:""
    }
  ]

  ngOnInit(): void {
    this.service.getCompany().subscribe(res=>{
      this.company = res;
    })
  }

  deleteCompany(id:any){
    this.service.deleteCompany(id).subscribe(res=>{
      if(res){
        this.ngOnInit()
      }
    },err=>{
      console.log(err);
      alert("deleted Successfully.....")
    })
  }



}
