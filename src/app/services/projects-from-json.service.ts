import { Injectable } from '@angular/core';
import projectsData from '../../assets/projects-info/projects.json';

interface Project{
  id: string;
  name: string;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsFromJsonService {

  constructor() { }

  getProjects(){
    return projectsData
  }
}
