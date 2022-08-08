import { Component, OnInit } from '@angular/core';
import { ProjectInterface, ProjectsFromJsonService } from 'src/app/services/projects-from-json.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  arrProjects: ProjectInterface[] =  this.projectsJSONService.getProjects()

  constructor(private projectsJSONService: ProjectsFromJsonService) { }

  ngOnInit(): void { }

}
