import { AfterViewInit, Component, EventEmitter, Input, IterableDiffers, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IProduct } from '../../ViewModel/iproduct';
import { Store} from '../../ViewModel/store';
import {ICategory} from '../../ViewModel/icategory';
import { isNgTemplate } from '@angular/compiler';
import { ShoppingCartItems } from '../../ViewModel/ShoppingCartItems';
import { ProductsService } from '../../Services/products.service';
import { ProductAPIService } from '../../Services/ProductAPI/product-api.service';
import { CartAPIServiceService } from 'src/app/Services/Cart/cart-apiservice.service';

import {NgToastService} from 'ng-angular-popup'
import { ProductCartService } from 'src/app/Services/product-cart.service';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges,AfterViewInit {


  store:Store;
  // ProductList:IProduct[];

   selectedCatID:number=1;
   categroy:ICategory[]=[];
   FilteredProd:IProduct[]=[];
    credit_Card:number=0;



 quantity:number=1;
   ClientName:string="";
   IsPurshased:boolean=true;
   idNumber:string="";
  selectdate:Date=new Date();


  @Input()RecivedSelectedCategoryId:number=0;
  OrderTotalPrice:number=0;

  ProductListOfCategory:IProduct[]=[];


  @Output() OnBuyDone: EventEmitter<ShoppingCartItems>;


  Cart:ShoppingCartItems[]=[];

envi:string=`${environment.APIUEL}/Resources/Images/`;

  Productlist:any;
  productitem:IProduct={
    id:0,
    name:'',
    price:0,
    quantity:0,
    catID:0,
    image:""
  }
  cartlist:IProduct[]=[];

  constructor(
    public Prdservice:ProductsService,
    private prdApiservice:ProductAPIService,
    private CartAPIService:CartAPIServiceService,
    private toast :NgToastService,
    private productcart:ProductCartService) {
      console.log(this.envi);


  this.OnBuyDone= new EventEmitter<ShoppingCartItems>();

    this.store={
  	Name:"ElectricalStore",
    Branches:["Assuit,Alx,Minia,sohage"],
    Logo:'https://fakeimg.pl/250x100/',

    };


    // this.categroy=[
    //   {id:1,name:"Category1"},
    //   {id:2,name:"Category2"},

    // ];
  }
  ngAfterViewInit(): void {

  }


  // checkout(){
  //   for (let item of this.ProductsCompObj.ProductList) {
  //     var prd=this.Cart.find(p=>p.ProductId==item.Id)
  //     if(prd){
  //       item.Quantity-=prd.SelectedQuantity;
  //     }
  //   }
  //   this.Cart=[];
  // }


  ngOnChanges(changes: SimpleChanges): void {

    this.prdApiservice.getProductsByCatID(this.RecivedSelectedCategoryId)
    .subscribe(Prdlist=>{this.ProductListOfCategory=Prdlist;
   // console.log(this.ProductListOfCategory);
    //console.log(this.RecivedSelectedCategoryId);
    });

    // this.ProductListOfCategory=this.Prdservice.getProductsByCatID(this.RecivedSelectedCategoryId);
    // console.log(this.RecivedSelectedCategoryId);

  //   if(this.RecivedSelectedCategoryId==0){
  //     this.ProductListOfCategory=this.ProductList;
  //   }
  //   else
  //  this.ProductListOfCategory=
  //   this.ProductList.filter(prd=>prd.CateogryID == this.RecivedSelectedCategoryId)


  }

  ngOnInit(): void {

  this.productcart.sharedValue.next(this.quantity)
  console.log(this.quantity);

    this.prdApiservice.getAllProducts().subscribe(Prdlist=>{
      this.ProductListOfCategory=Prdlist;
      console.log(Prdlist);

    });
console.log(this.Productlist);
console.log(this.ProductListOfCategory);
    // this.Productlist.forEach((a:IProduct) => {
    //   console.log(a);
    //   Object.assign(a,{quantity:1,total:a.price})

    // });
    // this.ProductListOfCategory=this.Prdservice.getProductsByCatID(this.RecivedSelectedCategoryId);

  }

  ToggleTable(){
    this.IsPurshased=!this.IsPurshased;
  }

  DecreaseQuqntity(x:IProduct){
   x.quantity=x.quantity-1;

  }
  fu(){
    console.log(this.selectedCatID);
  }

  CalPrice(itemcount:number,Price:number){
    this.OrderTotalPrice+=(itemcount*Price)

  }


  Buy(item:IProduct,Quantity:number){
    this.Cart[item.id]={
      ProductId:item.id,
      ProductName:item.name,
      SelectedQuantity:Quantity,
      UnitPrice:item.price

    }
    this.OnBuyDone.emit(this.Cart[item.id])
  }
AddToCart(item:any,quantity:any){

this.CartAPIService.AddTOCart(item)
this.quantity=quantity.value;



this.productcart.sharedValue.next(this.quantity )
this.cartlist.push(item)
//this.productcart.productValues.next(this.cartlist)


console.log(this.quantity);

// var X=JSON.parse(quantity.value);
// // console.log( this.quantity);
// this.productcart.sharedValue.next(X);

// console.log(X);


}
DeleteProduct(id:number){
Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this item',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {
    if (result.isConfirmed) {
    this.prdApiservice.deleteproduct(id).subscribe(
      response=>{

        this.toast.success({detail:"Deleted Success " ,duration:5000})

      }
    );

  } else if (result.isDismissed) {
    this.toast.info({detail:"Not deleted " ,duration:5000})


  }

});






}
Edit(item:IProduct){



}


createimgpath=(serverpath:string)=> {
return `https://localhost:44386/${serverpath}`
}

}


