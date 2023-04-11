import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BedsComponent } from './beds/beds.component';
import { ChairsComponent } from './chairs/chairs.component';
import { TablesComponent } from './tables/tables.component';
import { SofasComponent } from './sofas/sofas.component';
import { CupboardsComponent } from './cupboards/cupboards.component';
import { HeaderComponent } from './header/header.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { LrComponent } from './lr/lr.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { DressersComponent } from './dressers/dressers.component';
import { MueblesComponent } from './muebles/muebles.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';




const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'beds',component:BedsComponent},
  {path:'chairs',component:ChairsComponent},
  {path:'tables',component:TablesComponent},
  {path:'sofas',component:SofasComponent},
  {path:'cupboards',component:CupboardsComponent},
  { path:'bedroom',component:BedroomComponent},
  {path:'lr',component:LrComponent},
  {path:'kitchen',component:KitchenComponent},
  {path:'products',component:ProductsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'footer',component:FooterComponent},
  {path:'dressers',component:DressersComponent},
  {path:'muebles',component:MueblesComponent},
  {path:'payment',component:PaymentComponent},
  {path:'cart',component:CartComponent}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
