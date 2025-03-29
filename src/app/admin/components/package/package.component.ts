import { FormControl, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent {

  constructor(private readonly service:PackageService){}

  form: FormGroup = new FormGroup({
    pricename : new FormControl(""),
    rate : new FormControl(""),
    limitedspace: new FormControl(""),
    unlimitedspace: new FormControl(""),
    domainames: new FormControl(""),
    freessl: new FormControl(""),
    dailybackup: new FormControl(""),
    freetemplates: new FormControl(""),
    freemail: new FormControl(""),
    tendatabase: new FormControl(""),
    unlimitedemailadd: new FormControl(""),
    livesupport: new FormControl("")
  })

  formSubmit(){
    console.log(this.form.value);

    this.service.createPriceWithRqp(this.form.value).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

  // createPriceData(formValue:any):FormData{
  //   const formData = new FormData();

  //   formData.append('pricename', formValue.pricename);
  //   formData.append('rate', formValue.rate);
  //   formData.append('limitedspace', formValue.limitedspace);
  //   formData.append('unlimitedspace', formValue.unlimitedspace);
  //   formData.append('domainames', formValue.domainames);
  //   formData.append('freessl', formValue.freessl);
  //   formData.append('dailybackup', formValue.dailybackup);
  //   formData.append('freetemplates', formValue.freetemplates);
  //   formData.append('freemail', formValue.freemail);
  //   formData.append('tendatabase', formValue.tendatabase);
  //   formData.append('unlimitedemailadd', formValue.unlimitedemailadd);
  //   formData.append('livesupport', formValue.livesupport);
  //   return formData;
  // }

}
