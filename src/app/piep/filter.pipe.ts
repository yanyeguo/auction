import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], fieldName: string, keyword: string): any {
    if (!keyword) {
      return list;
    }
    return list.filter(item => {
      // const fieldValue = item['title'];
      const fieldValue: string = item[fieldName];
      console.log(fieldValue);
      return fieldValue.indexOf(keyword) >= 0;
    });
  }

}
