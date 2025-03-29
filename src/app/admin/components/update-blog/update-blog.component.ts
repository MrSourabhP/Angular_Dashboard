import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrl: './update-blog.component.css'
})
export class UpdateBlogComponent implements OnInit{

  constructor(private readonly service:BlogService,
    private readonly router:Router,
    private readonly route:ActivatedRoute
  ){}

  BlogId : string | null | undefined

  Blog = {
    id:"",
    name:"",
    sentence:"",
    authorname:"",
    date:"",
    image3:"",
    description:""
  }


  ngOnInit():void{
    this.route.paramMap.forEach(b=>{
      this.BlogId = b.get("id")
    })

    this.service.getBlogById(this.BlogId).subscribe(res=>{
      this.Blog = res;
      console.log(res);

      this.form.get("id")?.setValue(this.Blog.id)
      this.form.get("name")?.setValue(this.Blog.name)
      this.form.get("sentence")?.setValue(this.Blog.sentence)
      this.form.get("authorname")?.setValue(this.Blog.authorname)
      this.form.get("date")?.setValue(this.Blog.date)
      this.form.get("image3")?.setValue(this.Blog.image3)
      this.form.get("description")?.setValue(this.Blog.description)
    })
  }

  selectedFile:File | undefined

  form : FormGroup = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    sentence : new FormControl(''),
    authorname: new FormControl(''),
    date: new FormControl(''),
    image3: new FormControl(''),
    description: new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    // console.log(this.form.value)
    const formData = this.updateBlogData(this.form.value)
    this.service.updateBlog(formData).subscribe(res=>{
      this.router.navigate(["/admin/all-blog"])
      console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  updateBlogData(formValue:any):FormData{
    const formData = new FormData();
    formData.append('id', formValue.id);
    formData.append('name', formValue.name);
    formData.append('sentence', formValue.sentence);
    formData.append('authorname', formValue.authorname);
    formData.append('date', formValue.date);
    formData.append('description', formValue.description);
    if(this.selectedFile){
      formData.append('image3', this.selectedFile, this.selectedFile.name);
    }
    return formData;
  }

}
