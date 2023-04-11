import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BedsComponent } from './beds/beds.component';
import { ChairsComponent } from './chairs/chairs.component';
import { TablesComponent } from './tables/tables.component';
import { SofasComponent } from './sofas/sofas.component';
import { CupboardsComponent } from './cupboards/cupboards.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { LrComponent } from './lr/lr.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { DressersComponent } from './dressers/dressers.component';
import { MueblesComponent } from './muebles/muebles.component';
import { PaymentComponent } from './payment/payment.component';
import { ExtraOptions } from '@angular/router';
import { CartComponent } from './cart/cart.component';


const routerOptions:ExtraOptions={
  anchorScrolling:"enabled"
}



@NgModule({
  declarations: [																									
    AppComponent,
      LoginComponent,
      SignupComponent,
      HeaderComponent,
      HomeComponent,
      BedsComponent,
      ChairsComponent,
      TablesComponent,
      SofasComponent,
      CupboardsComponent,
      BedroomComponent,
      LrComponent,
      KitchenComponent,
      ProductsComponent,
      CategoriesComponent,
      FooterComponent,
      DressersComponent,
      MueblesComponent,
      PaymentComponent,
      CartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
