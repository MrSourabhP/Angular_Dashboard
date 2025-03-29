import { Component, OnInit } from '@angular/core';

import { CarrerService } from '../../services/carrer.service';

@Component({
  selector: 'app-all-carrer',
  templateUrl: './all-carrer.component.html',
  styleUrl: './all-carrer.component.css'
})
export class AllCarrerComponent implements OnInit{

  constructor(private readonly service:CarrerService){}

  carrer = [
    {
      id:"",
      role:"",
      skill:"",
      vacancy:"",
      joblocation:"",
      experience:"",
      description:""
    }
  ]

  ngOnInit(): void {
    this.service.getCarrer().subscribe(res=>{
      this.carrer = res;
    })
  }

  deleteCarrer(id:any){
    this.service.deleteCarrer(id).subscribe(res=>{
      if(res){
        this.ngOnInit()
      }
    }, err=>{
      console.log(err);

    })
  }



}
