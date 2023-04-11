import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

//   public cartItemList : any = [];
//   public productList = new BehaviorSubject <any>([]);
//   public grandTotal !: number;
// item: any;
//   constructor(private cartService : CartService) { }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   getProducts(){
//     return this.productList.asObservable();
//   }
//   setProduct(product:any){
//     this.cartItemList.push(...product);
//     this.productList.next(product);
//   }
//   addtoCart(product:any){
//     this.cartItemList.push(product);
//     this.productList.next(this.cartItemList);
//     this.getTotalPrice();
//     console.log(this.cartItemList)
//   }
//   getTotalPrice(){
//     let grandTotal = 0;
//     this.cartItemList.map((a:any)=>{
//       grandTotal += a.total;
//     })
//   }
//   removeCartItem(product:any){
//     this.cartItemList.map((a:any,index:any)=>{
//       if(product.id === a.id){
//         this.cartItemList.splice(index,1);
//       }
//     })
//   }
//   removeAllCart(product:any){
//     this.cartItemList= []
//     this.productList.next(this.cartItemList);
      
//   }


  // ngOnInit(): void {
  //   this.cartService.getProducts()
  //   .subscribe(res=>{
  //     this.products = res;
  //     this.grandTotal = this.cartService.getTotalPrice();
  //   })
  // }
  // removeItem(item: any){
  //   this.cartService.removeCartItem(item);
  // }
  // emptycart(){
  //   this.cartService.removeAllCart();
  // }
 
  
    public products : any = [];
    public grandTotal !: number;
    constructor(private cartService : CartService) { }
  
    ngOnInit(): void {
      this.cartService.getProducts()
      .subscribe(res=>{
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
    }
    removeItem(item: any){
      this.cartService.removeCartItem(item);
    }
    emptycart(){
      this.cartService.removeAllCart();
    }
  
  }
