import { Pipe, PipeTransform } from '@angular/core';
/*
  {{price | discount}}
*/
@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(target: number, ...args: unknown[]): number {
    if(target>500)
      return Math.round(target-target*0.1);
    else if(target>400)
      return Math.round(target-target*0.06);
    else if(target>300)
      return Math.round(target-target*0.04);
    else
      return Math.round(target-target*0.02);
  }

}
