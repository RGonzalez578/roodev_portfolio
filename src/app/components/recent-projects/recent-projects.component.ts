import { Component, OnInit } from '@angular/core';
import projectsData from '../../../assets/projects-info/projects.json';

interface Project{
  id: string;
  name: string;
  thumbnail: string;
}

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.css']
})
export class RecentProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  projects: Project[] = projectsData

}
