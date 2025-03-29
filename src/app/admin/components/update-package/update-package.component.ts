import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrl: './update-package.component.css'
})
export class UpdatePackageComponent implements OnInit{

  constructor(private readonly service:PackageService,
    private readonly router:Router,
    private readonly route:ActivatedRoute
  ){}

  priceId : string | null | undefined

  price = {
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


  ngOnInit():void{
    this.route.paramMap.forEach(r=>{
      this.priceId = r.get("id")
    })

    this.service.getPackageById(this.priceId).subscribe(res=>{
      this.price = res;
      console.log(res);

      this.form.get("id")?.setValue(this.price.id)
      this.form.get("pricename")?.setValue(this.price.pricename)
      this.form.get("rate")?.setValue(this.price.rate)
      this.form.get("limitedspace")?.setValue(this.price.limitedspace)
      this.form.get("unlimitedspace")?.setValue(this.price.unlimitedspace)
      this.form.get("domainames")?.setValue(this.price.domainames)
      this.form.get("freessl")?.setValue(this.price.freessl)
      this.form.get("dailybackup")?.setValue(this.price.dailybackup)
      this.form.get("freetemplates")?.setValue(this.price.freetemplates)
      this.form.get("freemail")?.setValue(this.price.freemail)
      this.form.get("tendatabase")?.setValue(this.price.tendatabase)
      this.form.get("unlimitedemailadd")?.setValue(this.price.unlimitedemailadd)
      this.form.get("livesupport")?.setValue(this.price.livesupport)
    })
  }

  form : FormGroup = new FormGroup({
    id : new FormControl(''),
    pricename : new FormControl(''),
    currency : new FormControl(''),
    rate: new FormControl(''),
    limitedspace:new FormControl(''),
    unlimitedspace:new FormControl(''),
    domainames:new FormControl(''),
    freessl:new FormControl(''),
    dailybackup:new FormControl(''),
    freetemplates:new FormControl(''),
    freemail:new FormControl(''),
    tendatabase:new FormControl(''),
    unlimitedemailadd:new FormControl(''),
    livesupport:new FormControl('')
  })

  onSubmit(){
    //console.log(this.form.value)
    const formData = this.updatePriceData(this.form.value)
    this.service.updatePackage(formData).subscribe(res=>{
      this.router.navigate(["/admin/all-package"])
      console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  updatePriceData(formValue:any):FormData{
    const formData = new FormData();
    formData.append('id', formValue.id);
    formData.append('pricename', formValue.pricename);
    formData.append('rate', formValue.rate);
    formData.append('limitedspace', formValue.limitedspace)
    formData.append('unlimitedspace', formValue.unlimitedspace)
    formData.append('domainames', formValue.domainames)
    formData.append('freessl', formValue.freessl)
    formData.append('dailybackup', formValue.dailybackup)
    formData.append('freetemplates', formValue.freetemplates)
    formData.append('freemail', formValue.freemail)
    formData.append('tendatabase', formValue.tendatabase)
    formData.append('unlimitedemailadd', formValue.unlimitedemailadd)
    formData.append('livesupport', formValue.livesupport)
    return formData;
  }

}
