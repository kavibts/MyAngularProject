import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList:any
  constructor(private renderer:Renderer2,private api:ApiService,private cart:CartService) {
    this.renderer.setStyle(document.body,'background-color','#FEA3AA');
   }

  ngOnInit() {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
    })
  }

}
