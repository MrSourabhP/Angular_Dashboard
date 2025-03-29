import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrl: './all-blog.component.css'
})
export class AllBlogComponent implements OnInit{

  constructor(private readonly service:BlogService, private readonly router:Router){}

  blogs = [
    {
      id:"",
      name:"",
      sentence:"",
      authorname:"",
      date:"",
      image3:"",
      description:""
    }
  ]

  ngOnInit(): void {
    this.service.getBlog().subscribe(res=>{
      //console.log(res);
      this.blogs = res;
    })
  }

  deleteBlog(id:any){
    this.service.deleteBlog(id).subscribe(res=>{
      if(res){
        this.ngOnInit()
      }
    }, err=>{
      console.log(err);

    })
  }

}
