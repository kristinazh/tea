import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compressText'
})
export class CompressTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.length <= 95 ? value : `${value.slice(0, 95)}...`
  }

}
