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
  private activeClassName: string = 'active'
  private noActiveClassName: string = 'noActive'

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
    let arrowTouched = arrow.classList[1] == 'left-arrow' ? 'r' : 'l';
    this.changeRectangleOnFront(arrowTouched)
    // console.log( arrowTouched == 'left-arrow' ? 'l' : 'r');
  }

  onArrowClick(event:any){
    console.log('click');      
  }

  changeRectangleOnFront(side: string){
    let previousActiveRectangleGroup: any = global.querySelectorFrom(this.rectangleGroups, '.active')[0];
    let previousActiveRectangleGroupNumber: string = previousActiveRectangleGroup.classList[1];
    let nextActiveRectangleGroupNumber: number = this.getNextActiveRectangleGroupNumber(side, previousActiveRectangleGroupNumber);
    let moveOppositeSideRectangleGroupNumber: number = this.getMoveOppositeSideRectangleGroupNumber(side, previousActiveRectangleGroupNumber);
    let oppositeSide: string = side == 'l' ? 'r' : 'l'

    this.deactiveRectangleGroup(side, previousActiveRectangleGroup);
    this.activeRectangleGroup(side, oppositeSide, nextActiveRectangleGroupNumber);
    this.moveOppositeSideRectangleGroup(side, oppositeSide, moveOppositeSideRectangleGroupNumber)
  }

  getNextActiveRectangleGroupNumber(side: string, previousActiveRectangleGroupNumber: string): number{
    switch(previousActiveRectangleGroupNumber){
      case 'one':
          return side == 'l' ? 1 : 4;
      case 'two':
        return side == 'l' ? 2 : 0;
      case 'three':
        return side == 'l' ? 3 : 1;
      case 'four':
        return side == 'l' ? 4 : 2;
      case 'five':
        return side == 'l' ? 0 : 3;
      default:
        return 0;
    }
  }

  getMoveOppositeSideRectangleGroupNumber(side: string, nextActiveRectangleGroupNumber: string): number{
    switch(nextActiveRectangleGroupNumber){
      case 'one':
          return side == 'l' ? 3 : 2;
      case 'two':
        return side == 'l' ? 4 : 3;
      case 'three':
        return side == 'l' ? 0 : 4;
      case 'four':
        return side == 'l' ? 1 : 0;
      case 'five':
        return side == 'l' ? 2 : 1;
      default:
        return 0;
    }
  }

  deactiveRectangleGroup(side: string, activeRectangleGroup: any): void{
    activeRectangleGroup.classList.remove(this.activeClassName);
    activeRectangleGroup.classList.add(this.noActiveClassName, side);
  }

  activeRectangleGroup(side: string, oppositeSide: string, nextRectableGroupNumber: number){
    let nextRectableGroup = this.rectangleGroups[nextRectableGroupNumber];
    nextRectableGroup.classList.remove(oppositeSide, this.noActiveClassName);
    nextRectableGroup.classList.add(this.activeClassName);
    
  }

  moveOppositeSideRectangleGroup(side: string, oppositeSide: string, changeSideRectableGroupNumber: any){
    let changeSideRectableGroup = this.rectangleGroups[changeSideRectableGroupNumber];
    changeSideRectableGroup.classList.remove(side);
    changeSideRectableGroup.classList.add(oppositeSide);
  }
}
