import { Component, ElementRef } from '@angular/core';
import * as global from 'src/globals';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
   
  private tmr: ReturnType<typeof setTimeout> | undefined;
  private natElement: any;
  private nav: any;
  private pageTitle: any;
  private pageText: any;
  private rectangleTitle: any;
  private rectangleContainer: any;
  private arrows: any;

  constructor(private elementRef: ElementRef){}
  ngAfterViewInit(){
    //Asign elements
    this.natElement = this.elementRef.nativeElement;
    this.pageTitle = this.natElement.querySelector('.pageTitle');
    this.pageText = this.natElement.querySelector('.pageText');
    this.rectangleTitle = this.natElement.querySelector('.rectangleGroupTitle');
    this.rectangleContainer = this.natElement.querySelector('.rectangleContainer');
    this.nav = this.natElement.parentElement.parentElement.childNodes[0].querySelector('a');
    this.arrows = this.elementRef.nativeElement.querySelectorAll('.arrow');

    //If nav its not showing, show it
    if(!this.nav.classList.contains('show')){
      this.nav.classList.add('show')
    }  

    //Animation timers
    this.tmr = setTimeout(() => this.pageTitle.classList.add('transition-start', 'transition-left'), 100)
    this.tmr = setTimeout(() => this.pageText.classList.add('show-fade-in'), 500);
    this.tmr = setTimeout(() => this.rectangleTitle.classList.add('transition-start', 'show', 'transition-left'), 1000);
    this.tmr = setTimeout(() => this.rectangleContainer.classList.add('bounce-start'), 1500); 
    this.tmr = setTimeout(() => { [].forEach.call(this.arrows, (arrow: any) => arrow.classList.add('show'));}, 1800);

    //Asign variables for events
    let arrowTouchEvent = this.onArrowTouch.bind(this);
    let arrowClickEvent = this.onArrowClick.bind(this);
    
    //Asign events listeners
    //Arrow events
    [].forEach.call(this.arrows, (arrow: any) =>  { 
        if(global.isMobile)
          arrow.addEventListener('touchstart', arrowTouchEvent);
        else
          arrow.addEventListener('click', arrowClickEvent); 
      });
  }

  //Events
  onArrowTouch(event: any){
    console.log('touched');
  }

  onArrowClick(event:any){
    console.log('click');      
  }

  changeRectangleOnFront(side: any){

  }
}
