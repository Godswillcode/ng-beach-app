import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string) {
    if (filterString === '') {
      return value;
    }
    const allBeaches = [];
    for (const beach of value) {
      if (beach['name'].toLowerCase() === filterString) {
        allBeaches.push(beach);
      } else if (beach['type'].toLowerCase() === filterString) {
        allBeaches.push(beach);
      }
    }

    return allBeaches;
  }
}
