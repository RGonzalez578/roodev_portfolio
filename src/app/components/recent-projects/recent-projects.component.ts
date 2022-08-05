import { Component, OnInit } from '@angular/core';
import { ProjectsFromJsonService, ProjectInterface } from '../../services/projects-from-json.service';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.css'],
  providers: [ProjectsFromJsonService]
})
export class RecentProjectsComponent implements OnInit {

  constructor(private projectsJSONService: ProjectsFromJsonService) { }

  ngOnInit(): void {}

  arrProjects: ProjectInterface[] =  this.projectsJSONService.getProjects()
}
