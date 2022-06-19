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
  //toggler: string = 'transparent'
  toggleTitle: string = 'Recent projects'

  constructor(private renderer: Renderer2) {  }

  ngOnInit(): void {  }

  toggleSection(): void{

    const toggler = this.toggleBtn.nativeElement
    const icon = this.toggleIcon.nativeElement

    if(this.clicked){
      this.showInfo()
      this.clicked = false
      this.toggleTitle = 'More about me'
      this.renderer.setStyle(toggler, 'background-color', 'var(--orange)')
      this.renderer.setStyle(icon, 'color', 'var(--white)')
      //this.toggler = 'var(--orange)'
    }else{
      this.showRecentProjects()
      this.clicked = true
      this.toggleTitle = 'Recent projects'
      this.renderer.setStyle(toggler, 'background-color', 'transparent')
      this.renderer.setStyle(icon, 'color', 'var(--orange)')
      //this.toggler = 'transparent'
    }
  }

  showRecentProjects(): void{
    this.recentProjects = true
    this.moreInfo = false
  }

  showInfo(): void{
    this.recentProjects = false
    this.moreInfo = true
  }

}