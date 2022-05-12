import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from "./AboutUs/about-us/about-us.component";
 import { ContactUSComponent } from './ContactUs/contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';


 const routes: Routes = [


    {path:'AboutUs', component:AboutUsComponent},
    {path:'Contactus',component:ContactUSComponent},

  ]


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUSComponent,
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
