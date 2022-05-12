import { Component, OnInit } from '@angular/core';
import { CartAPIServiceService } from '../Services/Cart/cart-apiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  TotalItemNumber:number=1;
  constructor(private CartAPIService:CartAPIServiceService) { }

  ngOnInit(): void {
    
    this.CartAPIService.GEtProductData().subscribe(res=>{
    this.TotalItemNumber=res.length;
    })
  }

}
