import { Component, OnInit } from '@angular/core';

import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-all-package',
  templateUrl: './all-package.component.html',
  styleUrl: './all-package.component.css'
})
export class AllPackageComponent implements OnInit{

  constructor(private readonly service:PackageService){}

  price = [
    {
      id:"",
      pricename:"",
      rate:"",
      limitedspace:"",
      unlimitedspace:"",
      domainames:"",
      freessl:"",
      dailybackup:"",
      freetemplates:"",
      freemail:"",
      tendatabase:"",
      unlimitedemailadd:"",
      livesupport:""

    }
  ]

  ngOnInit(): void {
    this.service.getPackage().subscribe(res=>{
      this.price=res;
    })
  }

  deletePackage(id:any){
    this.service.deletePackage(id).subscribe(res=>{
      if(res){
        this.ngOnInit()
      }
    },err=>{
      console.log(err);

    })
  }

}
