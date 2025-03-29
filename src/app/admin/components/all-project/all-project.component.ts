import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-project',
  templateUrl: './all-project.component.html',
  styleUrl: './all-project.component.css'
})
export class AllProjectComponent implements OnInit{

  constructor(private readonly service:ProjectService, private readonly router:Router){}

  projects = [
    {
      id:"",
      description:"",
      image2:""
    }
  ]

  ngOnInit(): void {
    this.service.getProject().subscribe(res=>{
      this.projects = res;
    })
  }

  deleteProject(id:any){
    this.service.deleteProject(id).subscribe(res=>{
      if(res){
        this.ngOnInit()
      }
    },err=>{
      console.log(err);

    })
  }



}
