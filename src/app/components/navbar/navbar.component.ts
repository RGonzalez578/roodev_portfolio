import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('mobileMenu', {static: false}) mobileMenu!: ElementRef
  @ViewChild('backgroundNav', {static:false}) backgroundNav!: ElementRef

  mobileMenuShown: boolean = false
  darkMode: boolean = false

  aboutSection: boolean = true
  skillsSection: boolean = false
  worksSection: boolean = false
  contactSection: boolean = false

  

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleMenu():void{
    const menu = this.mobileMenu.nativeElement
    const background = this.backgroundNav.nativeElement

    if(this.mobileMenuShown){
      
      this.mobileMenuShown = false
      //this.renderer.setStyle(background, 'opacity', '0')
      this.renderer.setStyle(background, 'display', 'none')

      this.renderer.setStyle(menu, 'top', '-23em')
    }else{
      
      this.mobileMenuShown = true
      this.renderer.setStyle(background, 'display', 'block')
      this.renderer.setStyle(background, 'opacity', '0')
      this.renderer.setStyle(background, 'opacity', '.5')

      this.renderer.setStyle(menu, 'top', '0')
    }
    
  }

  changeTheme():void{
    if(this.darkMode){
      //Light Mode
      document.documentElement.style.setProperty('--background', '#FAFAFA');
      document.documentElement.style.setProperty('--black', '#282828');
      document.documentElement.style.setProperty('--background-navbar', '#11BADE');
      document.documentElement.style.setProperty('--blue', '#3755C8');
      this.darkMode = false
    }else{
      //Dark Mode
      document.documentElement.style.setProperty('--background', '#282828');
      document.documentElement.style.setProperty('--black', '#FAFAFA');
      document.documentElement.style.setProperty('--background-navbar', '#FFB800');
      document.documentElement.style.setProperty('--blue', '#3755C8');
      this.darkMode = true
    }
  }

  pointAbout(): void{
    this.aboutSection = true
    this.skillsSection = false
    this.worksSection = false
    this.contactSection = false
  }

  pointSkills(): void{
    this.aboutSection = false
    this.skillsSection = true
    this.worksSection = false
    this.contactSection = false
  }

  pointWorks(): void{
    this.aboutSection = false
    this.skillsSection = false
    this.worksSection = true
    this.contactSection = false
  }

  pointContact(): void{
    this.aboutSection = false
    this.skillsSection = false
    this.worksSection = false
    this.contactSection = true
  }

}