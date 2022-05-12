import{NgToastModule} from 'ng-angular-popup'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EgyptiannationalIDnumberPipe } from './Pipes/egyptiannational-idnumber.pipe';
import { CreditCardNumberPipe } from './Pipes/credit-card-number.pipe';
import { ProductcardDirective } from './Directives/productcard.directive';
import { HomeComponent } from './Home/home/home.component';

import { MainLayOutComponent } from './main-lay-out/main-lay-out.component';
import { LogInComponent } from './LogIn/log-in/log-in.component';
import { RegisterComponent } from './Regsteration/register/register.component';
import { CategoryComponent } from './category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    EgyptiannationalIDnumberPipe,
    CreditCardNumberPipe,
    ProductcardDirective,
    HomeComponent,

    MainLayOutComponent,

    LogInComponent,
    RegisterComponent,
    CategoryComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgToastModule,

    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
