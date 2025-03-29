import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-all-team',
  templateUrl: './all-team.component.html',
  styleUrl: './all-team.component.css'
})
export class AllTeamComponent implements OnInit{

  constructor(private readonly service:TeamService, private readonly router:Router){}

  teams = [
    {
      id:"",
      name:"",
      designation:"",
      email:"",
      memberdesc:"",
      image4:""
    }
  ]

  ngOnInit(): void {
    this.service.getTeam().subscribe(res=>{
      this.teams = res;
    })
  }

  deleteTeam(id:any){
    this.service.deleteTeam(id).subscribe(res=>{
      if(res){
        this.ngOnInit()
      }
    },err=>{
      console.log(err);

    })
  }

}
