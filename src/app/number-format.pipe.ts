import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {   
    return (Math.round(value * 100) / 100).toLocaleString();
  }

}
