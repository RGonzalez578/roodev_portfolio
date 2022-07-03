import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('mobileMenu', {static: false}) mobileMenu!: ElementRef
  @ViewChild('backgroundNav', {static:false}) backgroundNav!: ElementRef

  mobileMenuShown: boolean = false

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

}