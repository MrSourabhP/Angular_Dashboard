import { FormControl, FormGroup } from '@angular/forms';

import { BlogService } from '../../services/blog.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  constructor(private readonly service:BlogService){}

  selectedFile : File | undefined

  form :FormGroup = new FormGroup({
    name : new FormControl(''),
    sentence : new FormControl(''),
    authorname : new FormControl(''),
    date : new FormControl(''),
    image3 : new FormControl(''),
    description : new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  formSubmit(){
    const formdata = this.createBlogData(this.form.value)
    this.service.insertBlog(formdata).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  createBlogData(formValue:any):FormData{
    const formData = new FormData();

    formData.append('name', formValue.name);
    formData.append('sentence', formValue.sentence);
    formData.append('authorname', formValue.authorname);
    formData.append('date', formValue.date);
    formData.append('description', formValue.description);
    if(this.selectedFile){
      formData.append('image3', this.selectedFile, this.selectedFile?.name);
    }
    return formData;
  }





}
