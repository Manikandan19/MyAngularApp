import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any): any {
    return (value+'$');
  }

}
