import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { SearchFilterService } from '../search-filter.service'
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProjectTileComponent } from '../project-tile/project-tile.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ProjectService, SearchFilterService]
})
export class WelcomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private projectService: ProjectService, private searchFilterService: SearchFilterService, private router: Router) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
