import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardNumber'
})
export class CreditCardNumberPipe implements PipeTransform {

  transform(value: any): any {
    
    return value.slice(0,4)+"-"+value.slice(4,8)+"-"+value.slice(8,12)+"-"+value.slice(12,16);
  }
}
