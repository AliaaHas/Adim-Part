import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LogInComponent } from './LogIn/log-in/log-in.component';
import { MainLayOutComponent } from './main-lay-out/main-lay-out.component';

import { RegisterComponent } from './Regsteration/register/register.component';

const routes: Routes = [
  {path:'',component:MainLayOutComponent,children:[
     //DefaulPath
    {path:'',redirectTo:'/Home',pathMatch:'full'},

    {path:'Home',component:HomeComponent},


    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },

    {
      path: 'Product',
      loadChildren: () => import('./product-module/product-module.module').then(m => m.ProductModuleModule)
    },


  ]},

   //WildCard path
   {path:'LogIn',component:LogInComponent},
   {path:'Register',component:RegisterComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
