import { Injectable } from '@angular/core';
import projectsData from '../../assets/projects-info/projects.json';

export interface Technologies{
  techName: string
}

export interface Gallery{
  title: string
  description: string
  img: string
}

export interface ProjectInterface{
  id: string
  release_date: string
  name: string
  thumbnail: string
  description: string
  process: string
  role: string
  team: string
  results: string
  learned: string
  technologies: Technologies[]
  gallery: Gallery[]
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsFromJsonService {

  arrProjects: ProjectInterface[] = projectsData;

  constructor() {
    for (let i = 0; i < this.arrProjects.length; i++) {
      console.log(this.arrProjects[i].gallery[0].title)
    }
  }

  getProjects(){
    return this.arrProjects
  }
}
