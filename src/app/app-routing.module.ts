import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';

import { HeaderComponent } from './components/header/header.component';
import { DeliveryformComponent } from './components/pages/deliveryform/deliveryform.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { SuccesspaymentComponent } from './successpayment/successpayment.component';


const routes: Routes = [

  {
    path:'home', component:HomeComponent
  },

  {
    path:'search/:searchTerm', component:HomeComponent
  },
  {
    path:'tag/:tag', component:HomeComponent
  },
  {
    path:'food/:id', component:FoodPageComponent
  },
  {
    path:'cart-page', component:CartPageComponent
  },
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},

  {
    path:'deliveryform', component:DeliveryformComponent
  },
  {
    path:'aboutus', component:AboutUsComponent
  },
  {
    path:'successpayment', component:SuccesspaymentComponent
  },

  {path:'',redirectTo:'/login',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
