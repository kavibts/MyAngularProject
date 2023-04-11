import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private viewportScoller:ViewportScroller,private router:Router) { }
  toReview(){
    this.viewportScoller.scrollToAnchor("review");

  }
  toBlogs(){
    this.viewportScoller.scrollToAnchor("blogs");
  }


  ngOnInit() {
  }
  logout(){
    this.router.navigate(["/home"]).then(()=>{
      window.location.reload();
    })
  }
}

