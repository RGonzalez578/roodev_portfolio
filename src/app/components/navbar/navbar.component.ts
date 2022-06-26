import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('mobileMenu', {static: false}) mobileMenu!: ElementRef

  mobileMenuShown: boolean = false

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleMenu():void{
    const menu = this.mobileMenu.nativeElement

    if(this.mobileMenuShown){
      this.renderer.setStyle(menu, 'top', '-23em')
      this.mobileMenuShown = false
    }else{
      this.renderer.setStyle(menu, 'top', '0')
      this.mobileMenuShown = true
    }
    
  }

}