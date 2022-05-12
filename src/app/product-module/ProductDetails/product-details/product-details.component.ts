import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAPIService } from 'src/app/Services/ProductAPI/product-api.service';
import { ProductsService } from 'src/app/Services/products.service';
import { ShoppingCartComponent } from 'src/app/product-module/shopping-cart/shopping-cart.component';
import { IProduct } from 'src/app/ViewModel/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private CurrentPrdID:number=0;
  private ProductIDList:number[]=[];
    // private PreviousPrdID:number=0;
    // private NextPrdID:number=0;



  product:IProduct|undefined=undefined;

  constructor(private activateroute :ActivatedRoute,
    private productservice:ProductsService,
    private location:Location,
    private router:Router,
    private prdAPIservice:ProductAPIService) { }

  ngOnInit(): void {


  this.CurrentPrdID=Number (this.activateroute.snapshot.paramMap.get("Id"))

  this.prdAPIservice.getProductByID(this.CurrentPrdID).subscribe(Prd=>{
    this.product=Prd;
    console.log(this.product);
    console.log(this.activateroute.params);


  // //alert(this.PrdID);
  // this.product=this.productservice.getProductByID(this.CurrentPrdID);
  // this.activateroute.paramMap.subscribe(parammap=>{
  //   this.CurrentPrdID=Number(parammap.get("ID"));
  //   this.product=this.productservice.getProductByID(this.CurrentPrdID);

  })


  this.ProductIDList=this.productservice.getProductIDSList();


  }
  GoBack(){
this.location.back();

  }
  Previousproduct(){

    let Index=this.ProductIDList.findIndex((val)=>val==this.CurrentPrdID);

    //alert(Index);
    if(Index!=0){
      this.CurrentPrdID=this.ProductIDList[Index-1];
      this.router.navigate(['/Products',this.CurrentPrdID])
    }

  }
  NextProduct(){
    let Index=this.ProductIDList.findIndex((val)=>val==this.CurrentPrdID);

    //alert(Index);
    if(Index<this.ProductIDList.length-1){
      this.CurrentPrdID=this.ProductIDList[Index+1];
      this.router.navigate(['/Products',this.CurrentPrdID])

    }

  }
ISFirstItem():boolean{
  return this.CurrentPrdID==this.ProductIDList[0];

}

ISLAstItem():boolean{
  return this.CurrentPrdID==this.ProductIDList.length-1;

}

}
