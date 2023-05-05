import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberPipe'
})
export class PhoneNumberPipePipe implements PipeTransform {

  transform(phoneNumber: any):string {
    
    if(phoneNumber.length==null)
    {
      return 'Invalid number';
    }
    let phoneNumberStr = phoneNumber.toString();
   
    if(phoneNumberStr.length<9)
    {
      return 'Not enough digits';
    }
    else
    if(phoneNumberStr.length>9)
    {
      return 'Too many digits';
    }
    return '';
  }
}
