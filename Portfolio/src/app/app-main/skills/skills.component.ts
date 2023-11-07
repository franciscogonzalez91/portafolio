import { Component, ElementRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as global from 'src/globals';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [CookieService]
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
  private rectangleGroups: any;
  private activeRectangleGroup: any;

  constructor(private elementRef: ElementRef, private cookieService: CookieService){}

  ngOnInit(): void {
    const cookieExists: boolean = this.cookieService.check('ActualPage');
    if(cookieExists)
      this.cookieService.delete('ActualPage');
    this.cookieService.set('ActualPage', 'skills');
  }


  ngAfterViewInit(){
    //Asign elements
    this.natElement = this.elementRef.nativeElement;
    this.pageTitle = this.natElement.querySelector('.pageTitle');
    this.pageText = this.natElement.querySelector('.pageText');
    this.rectangleGroups = this.natElement.querySelectorAll('.rectangleGroup')
    this.rectangleTitle = this.natElement.querySelector('.rectangleGroupTitle');
    this.rectangleContainer = this.natElement.querySelector('.rectangleContainer');
    this.nav = this.natElement.parentElement.parentElement.childNodes[0].querySelector('a');
    this.arrows = this.elementRef.nativeElement.querySelectorAll('.arrow');

    //If nav its not showing, show it
    if(!this.nav.classList.contains('show')){
      this.nav.classList.add('show');
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
    let arrow = event.target.parentElement;
    let arrowTouched = arrow.classList[1] == 'left-arrow' ? 'l' : 'r';
    this.changeRectangleOnFront(arrowTouched)
    // console.log( arrowTouched == 'left-arrow' ? 'l' : 'r');
  }

  onArrowClick(event:any){
    console.log('click');      
  }

  changeRectangleOnFront(side: any){
    let activeRectangleGroup: any = global.querySelectorFrom(this.rectangleGroups, '.active')[0];
    let activeRectangleGroupNumber: string = activeRectangleGroup.classList[1];
    let noActiveRectableGroups: any = global.querySelectorFrom(this.rectangleGroups, '.noActive');
    activeRectangleGroup.classList.remove('active');
    activeRectangleGroup.classList.add('noActive', 'l');
    console.log(noActiveRectableGroups);
    console.log(activeRectangleGroupNumber);
    switch(activeRectangleGroupNumber){
      case 'one':
        noActiveRectableGroups[0].classList.add('active');
        noActiveRectableGroups[0].classList.remove('noActive', 'r');
        
        break;
      case 'two':
        noActiveRectableGroups[0].classList.add('r');
        noActiveRectableGroups[0].classList.remove('l');   
        noActiveRectableGroups[1].classList.add('active');
        noActiveRectableGroups[1].classList.remove('noActive', 'r');
        break      
      case 'three':
        noActiveRectableGroups[1].classList.add('r');
        noActiveRectableGroups[1].classList.remove('l');   
        noActiveRectableGroups[2].classList.add('active');
        noActiveRectableGroups[2].classList.remove('noActive', 'r');
        break;   
      case 'four':
        noActiveRectableGroups[2].classList.add('r');
        noActiveRectableGroups[2].classList.remove('l');
        noActiveRectableGroups[3].classList.add('active');
        noActiveRectableGroups[3].classList.remove('noActive', 'r');        
        break;
      case 'five':
        noActiveRectableGroups[2].classList.add('r');
        noActiveRectableGroups[2].classList.remove('l');
        noActiveRectableGroups[0].classList.add('active');
        noActiveRectableGroups[0].classList.remove('noActive', 'r');
        break
    }






    // switch(this.activeRectangleGroup){
    //   case 'one':

    //     break;      
    // }
  }
}
