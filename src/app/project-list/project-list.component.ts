import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProjectTileComponent } from '../project-tile/project-tile.component';
import { SearchFilterService } from '../search-filter.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService, SearchFilterService]
})
export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  searchFilter: string = "";
  constructor(private projectService: ProjectService, private searchFilterService: SearchFilterService, private router: Router) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.searchFilter = this.searchFilterService.getSearchFilter();
  }
}
