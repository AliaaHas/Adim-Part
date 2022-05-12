import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModel/iproduct';
import { ICategory } from '../ViewModel/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private ProductList:IProduct[];
  constructor() {

    this.ProductList=[
      {id:1,name:'Hp',price:200,quantity:0,image:'https://fakeimg.pl/250x100/',catID:1},
      {id:2,name:'Dell',price:500,quantity:1,image:'https://fakeimg.pl/250x100/',catID:1},
      {id:3,name:'TabletSumsung',price:800,quantity:15,image:'https://fakeimg.pl/250x100/',catID:2},
      {id:4,name:'TabletLenovo',price:700,quantity:25,image:'https://fakeimg.pl/250x100/',catID:2},
      {id:5,name:'TabletHwawy',price:800,quantity:0,image:'https://fakeimg.pl/250x100/',catID:2},
      {id:6,name:'Lenovo',price:700,quantity:30,image:'https://fakeimg.pl/250x100/',catID:1},
      {id:7,name:'TabletMac',price:800,quantity:1,image:'https://fakeimg.pl/250x100/',catID:2},
      {id:8,name:'ViVo',price:800,quantity:5,image:'https://fakeimg.pl/250x100/',catID:3},
      {id:9,name:'IPhone',price:700,quantity:10,image:'https://fakeimg.pl/250x100/',catID:3},

    ];
  }
  getAllProducts():IProduct[]{
    return this.ProductList;
    // console.log(this.ProductList);

  }

    	getProductsByCatID(CateogryID:number):IProduct[] {
        if(CateogryID==0){
        return   this.ProductList;
        }
        else
      return  this.ProductList.filter(prd=>prd.catID == CateogryID)

    }



    	getProductByID(prodID:number): IProduct|undefined{
        return this.ProductList.find(prd=>prd.id==prodID);

      }

      getProductIDSList():number[]{
        return this.ProductList.map(P=>P.id);

      }

}
