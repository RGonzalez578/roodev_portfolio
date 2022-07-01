import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('toggleBtn') toggleBtn!: ElementRef
  @ViewChild('toggleIcon') toggleIcon!: ElementRef

  clicked: boolean = true
  recentProjects: boolean = true
  moreInfo: boolean = false
  toggleTitle: string = 'Recent projects'

  constructor(private renderer: Renderer2) {  }

  ngOnInit(): void {  }

  toggleSection(): void{

    const toggler = this.toggleBtn.nativeElement
    const icon = this.toggleIcon.nativeElement

    if(this.clicked){
      this.showInfo()
      
      this.renderer.setStyle(toggler, 'background-color', 'var(--orange)')
      this.renderer.setStyle(icon, 'color', 'var(--white)')
    }else{
      this.showRecentProjects()
      
      this.renderer.setStyle(toggler, 'background-color', 'transparent')
      this.renderer.setStyle(icon, 'color', 'var(--orange)')
    }
  }

  showRecentProjects(): void{
    this.recentProjects = true
    this.moreInfo = false

    this.clicked = true
    this.toggleTitle = 'Recent projects'
  }

  showInfo(): void{
    this.recentProjects = false
    this.moreInfo = true

    this.clicked = false
    this.toggleTitle = 'More about me'
  }

}