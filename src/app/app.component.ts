import { Component, OnInit, NgModule } from '@angular/core';
import { SearchFilterService } from './search-filter.service';
import { FormsModule }  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchFilterService]
})
export class AppComponent implements OnInit {

  searchFilter: string = "";
  constructor(private searchFilterService: SearchFilterService){}

  ngOnInit() {
    this.searchFilter = this.searchFilterService.getSearchFilter();
  }

  clearSearch() {
    this.searchFilter = "";
  }
}
