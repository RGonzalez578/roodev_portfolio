import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  clicked: boolean = true
  recentProjects: boolean = true
  moreInfo: boolean = false

  toggleSection(){
    if(this.clicked){
      this.showInfo()
      this.clicked = false
    }else{
      this.showRecentProjects()
      this.clicked = true
    }
  }

  showRecentProjects(){
    this.recentProjects = true
    this.moreInfo = false
  }

  showInfo(){
    this.recentProjects = false
    this.moreInfo = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}