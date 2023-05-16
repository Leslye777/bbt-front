import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLoan'
})
export class SearchLoanPipe implements PipeTransform {
  transform(loans: any[], searchValue: string, selectedSearchType: string): any[] {
    if (!searchValue) {
      return loans;
    }
    return loans.filter((loan) => {
      const searchProperty = loan[selectedSearchType].toString().toLowerCase();
      return searchProperty.includes(searchValue.toLowerCase());
    });
  }
}
