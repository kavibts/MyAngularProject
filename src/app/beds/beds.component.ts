import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {
  public productList:any;

  constructor(private renderer:Renderer2,private api:ApiService,private cart:CartService) {
    this.renderer.setStyle(document.body,'background-color','#FEA3AA');
   }

   ngOnInit() {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }
addtocart(item: any){
  this.cart.addtoCart(item);
}

}
