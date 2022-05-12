import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductComponent } from './AddProduct/add-product/add-product.component';
 import { ProductDetailsComponent } from './ProductDetails/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';



const routes: Routes = [

    {path:'Products', component:ShoppingCartComponent},
    {path:'Products/:ID',component:ProductDetailsComponent},
    {path:'AddProduct',component:AddProductComponent },
    {path:'AddProduct/:id',component:AddProductComponent },



    ]


@NgModule({
  declarations: [
    AddProductComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ShoppingCartComponent,
    UploadComponent,



  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModuleModule { }
