import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchLoanPipe implements PipeTransform {
  transform(loans: any[], searchValue: string, selectedSearchType: string): any[] {
    if (!searchValue || !selectedSearchType) {
      return loans;
    }
    return loans.filter((loan) => {
      const searchProperty = this.getPropertyValue(loan, selectedSearchType);
      return searchProperty && String(searchProperty).toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  private getPropertyValue(object: any, propertyPath: string): any {
    const properties = propertyPath.split('.');
    let value = object;
    for (const property of properties) {
      value = value[property];
      if (!value) {
        return null;
      }
    }
    return value;
  }
}
