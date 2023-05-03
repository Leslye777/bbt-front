import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchBookPipe implements PipeTransform {
  transform(books: any[], searchValue: string, selectedSearchType: string): any[] {
    if (!searchValue) {
      return books;
    }
    return books.filter((book) => {
      const searchProperty = book[selectedSearchType].toLowerCase();
      return searchProperty.includes(searchValue.toLowerCase());
    });
  }
}
