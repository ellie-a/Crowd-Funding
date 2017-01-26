import { Component, OnInit, NgModule } from '@angular/core';
import { SearchFilterService } from './search-filter.service';
import { FormsModule }  from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchFilterService]
})
export class AppComponent implements OnInit {
  constructor(private searchFilterService: SearchFilterService, private router: Router){}

  ngOnInit() {
  }

  // clearSearch(search) {
  //   search.value = "";
  // }

  searchForProject(search: string): void{
    this.searchFilterService.getSearchFilter().search = search;
    console.log(this.searchFilterService.getSearchFilter());
    this.router.navigate(['projects']);
  }
}
