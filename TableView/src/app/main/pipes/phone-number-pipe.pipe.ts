import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberPipe'
})
export class PhoneNumberPipePipe implements PipeTransform {

  transform(value: any, countryPrefix: string='+1'):string {
    if(value==null)
    {
      return 'Invalid number';
    }
    if (typeof value !== 'number' || isNaN(value)) {
      return 'Invalid number';
    }
    let phoneNumberStr = value.toString();
   
    if (phoneNumberStr.length !== 9) {
      return 'Invalid number';
    }
    return `$[countryPrefix] (${phoneNumberStr.slice(0, 3)}) ${phoneNumberStr.slice(3)}`;
  }
}
