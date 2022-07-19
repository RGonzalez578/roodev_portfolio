import { Component, OnInit } from '@angular/core';
import { ProjectsFromJsonService } from '../../services/projects-from-json.service';

interface Project{
  id: string;
  name: string;
  thumbnail: string;
}

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.css'],
  providers: [ProjectsFromJsonService]
})
export class RecentProjectsComponent implements OnInit {

  constructor(private jsonService: ProjectsFromJsonService) {}

  ngOnInit(): void {}

  projects: Project[] = this.jsonService.getProjects()

}
