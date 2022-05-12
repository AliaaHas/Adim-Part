import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IProduct } from '../ViewModel/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {


  sharedValue:BehaviorSubject<number>
  productValues:BehaviorSubject<IProduct>
  constructor( ) {
    this.sharedValue=new BehaviorSubject<number>(0);
    this.productValues=new BehaviorSubject<IProduct>({} as IProduct)

  }
}
