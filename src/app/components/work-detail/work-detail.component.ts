import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery, ProjectInterface, ProjectsFromJsonService, Technologies } from 'src/app/services/projects-from-json.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {

  //Class members
  id:string|null = ''
  title:string = ''
  arrProjects: ProjectInterface[] =  this.projectsJSONService.getProjects()
  project: ProjectInterface = {} as ProjectInterface

  constructor(private route:ActivatedRoute, private projectsJSONService:ProjectsFromJsonService) { }

  ngOnInit(): void {

    window.scroll(0, 0)

    //Get Id from router
    this.id = this.route.snapshot.paramMap.get('id')

    //Search project from JSON using id
    for (let i = 0; i < this.arrProjects.length; i++) {
      if (this.arrProjects[i].id == this.id) {
        this.project = this.arrProjects[i]
        break
      }
    }

  }

}
