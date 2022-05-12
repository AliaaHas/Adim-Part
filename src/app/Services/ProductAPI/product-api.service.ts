import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/ViewModel/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  private httpoptions;

  constructor(private httpclient:HttpClient) {
    this.httpoptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })

    }
  }

  getAllProducts():Observable <IProduct[]>
  {

    return this.httpclient.get<IProduct[]>('https://localhost:44386/api/Product')
  }

  getProductsByCatID(CateogryID: number): Observable<IProduct[]>
  {
    return this.httpclient.get<IProduct[]>(`https://localhost:44386/api/Product/catid?catogid=${CateogryID}`)
  }


  getProductByID(Id: number): Observable<IProduct>
  {
    return this.httpclient.get<IProduct>(`https://localhost:44386/api/Product/${Id}`)

  }

  addNewProduct(newPrd: IProduct):Observable<IProduct>
  {
    return this.httpclient.post<IProduct>('https://localhost:44386/api/Product',
   JSON.stringify(newPrd),this.httpoptions);
  }

deleteproduct(id:number):Observable<IProduct>{
  return this.httpclient.delete<IProduct>(`https://localhost:44386/api/Product/${id}`)


}
editproduct(prd:IProduct):Observable<IProduct>{
  return this.httpclient.put<IProduct>(`https://localhost:44386/api/Product/${prd.id}`,prd)


}



}
