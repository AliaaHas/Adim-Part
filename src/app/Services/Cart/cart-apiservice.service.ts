import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartAPIServiceService {
CartDataList:any=[];
ProductList=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  GEtProductData(){
    return this.ProductList.asObservable();
  }



  SetProduct(product:any){
    this.CartDataList.push(...product);
    this.ProductList.next(product);
  }

  AddTOCart(product:any){
   this.CartDataList.push(product);
   this.ProductList.next(this.CartDataList);
   this.GetTotalAmount();
   console.log(this.CartDataList)
  }

  GetTotalAmount(){
    let Total=0;
    this.CartDataList.map((a:any)=>{
      Total+=a.Total;
    })
  }


RemoveCartData(product:any){
this.CartDataList.map((a:any,index:any)=>{
  if(product.id===a.id){
    this.CartDataList.splice(index,1)
  }
})

this.ProductList.next(this.CartDataList)

}
 RemoveAllCart(){
   this.CartDataList=[]
   this.ProductList.next(this.CartDataList)
 }





}
