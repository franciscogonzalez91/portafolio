import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppHeaderComponent } from 'src/app/app-header/app-header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  tmr: ReturnType<typeof setTimeout> | undefined;
  private nav: any;
  private titleName: any;
  private titleJobTitles: any; 
  private titleJobPosition: any; 
  private txtIntroduction: any;
  private imgProfile: any;

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit(){
    this.nav = this.elementRef.nativeElement.parentElement.parentElement.childNodes[0].querySelector('a');
    if(!this.nav.classList.contains('show')){
      this.nav.classList.add('show')
    }  
    this.titleName = this.elementRef.nativeElement.querySelector('h1');
    this.titleJobTitles = this.elementRef.nativeElement.querySelector('h2');
    this.titleJobPosition = this.elementRef.nativeElement.querySelector('h4');
    this.txtIntroduction = this.elementRef.nativeElement.querySelector('#divProfile');
    this.imgProfile = this.elementRef.nativeElement.querySelector('#divProfilePic');

    
    this.tmr = setTimeout(()=> this.titleName.classList.add('show'), 200);
    this.tmr = setTimeout(()=> this.titleJobTitles.classList.add('show'), 500);
    this.tmr = setTimeout(()=> this.titleJobPosition.classList.add('show'), 800);
    this.tmr = setTimeout(()=> this.txtIntroduction.classList.add('show'), 1500);
    this.tmr = setTimeout(()=> this.imgProfile.classList.add('show'), 1800);

  }
}
