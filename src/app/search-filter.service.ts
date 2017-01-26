import { Injectable } from '@angular/core';

@Injectable()
export class SearchFilterService {
  public searchFilter: String;

  constructor() {this.searchFilter = ""}

  getSearchFilter() {
    return this.searchFilter;
  }
  setSearchFilter(search: string) {
    this.searchFilter = search;
  }
}
