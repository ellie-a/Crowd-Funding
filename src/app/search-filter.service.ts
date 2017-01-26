import { Injectable } from '@angular/core';
import { searchFilter } from './searchFilter';

@Injectable()
export class SearchFilterService {
  constructor() {}
  getSearchFilter(){
    return searchFilter;
  }
}
