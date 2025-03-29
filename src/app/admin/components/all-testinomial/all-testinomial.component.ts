import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-all-testinomial',
  templateUrl: './all-testinomial.component.html',
  styleUrl: './all-testinomial.component.css'
})
export class AllTestinomialComponent implements OnInit{

  constructor(private readonly service:TestService, private router:Router){}

  clients = [
    {
      id:"",
      clientname:"",
      projectname:"",
      feedback:"",
      image5:""
    }
  ]

  ngOnInit(): void {
    this.service.getTesti().subscribe(res=>{
      this.clients=res;
    })
  }



}
