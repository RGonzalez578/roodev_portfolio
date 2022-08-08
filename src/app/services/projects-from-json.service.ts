import { Injectable } from '@angular/core';
import projectsData from '../../assets/projects-info/projects.json';

export interface Technologies{
  tech_name: string
}

export interface Gallery{
  id: string
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

  constructor() { }

  getProjects(){
    return this.arrProjects
  }
}
