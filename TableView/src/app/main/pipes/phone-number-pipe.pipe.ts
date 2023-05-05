import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberPipe'
})
export class PhoneNumberPipePipe implements PipeTransform {

  transform(value: number, countryPrefix: string='+1'):string {
    if (typeof value !== 'number' || isNaN(value)) {
      return 'Invalid number';
    }
    let phoneNumberStr = value.toString();
   
    if (phoneNumberStr.length !== 9) {
      return 'Invalid number';
    }

    const prefixRegex = /^\+\d{2,3}$/;
    if (!prefixRegex.test(countryPrefix)) 
    {
      return 'Invalid prefix';
    }

    return '$[countryPrefix] ($[phoneNumberStr.slice(0, 3)]) ${phoneNumberStr}';
  }
}
