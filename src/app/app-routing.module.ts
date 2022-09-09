import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Mycomponent/login/login.component';
import { SignupComponent} from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import {   UserListComponent  } from './user-list/user-list.component';
import {HeaderComponent} from'./header/header.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path:'', redirectTo:'product',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'user-list',component:UserListComponent},
  {path:'header',component:HeaderComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
