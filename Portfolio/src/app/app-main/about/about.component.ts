import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppHeaderComponent } from 'src/app/app-header/app-header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  private nav: any;

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit(){
    this.nav = this.elementRef.nativeElement.parentElement.parentElement.childNodes[0].querySelector('a');
    if(!this.nav.classList.contains('show')){
      this.nav.classList.add('show')
    }  
  }
}
