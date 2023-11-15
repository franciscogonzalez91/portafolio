import { Component, ElementRef } from '@angular/core';
import { isMobile } from 'src/globals';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  navBarElement: any;
  navElement: any;
  liElements: any;
  tmr: ReturnType<typeof setTimeout> | undefined;
  isMobile: boolean = true;

  constructor(private elementRef:ElementRef){
    // this.isMobile = true;
  }

  ngAfterViewInit(){
    /*Event for navBars*/
    this.navBarElement = this.elementRef.nativeElement.querySelector('.navBars');    
    this.navBarElement.addEventListener('click', this.onClickBars.bind(this));

    /*Events for li's*/
    this.liElements = this.elementRef.nativeElement.querySelectorAll('li');
    let touchEventFunction = this.onTouchli.bind(this);
    let mouseOverEventFunction = this.hoverEffect.bind(this);
    let mouseOutEventFunction = this.hoverEffect.bind(this);
    [].forEach.call(this.liElements, function(li: any){
      if(isMobile){
        li.addEventListener('touchstart', touchEventFunction);      
      }else{
        li.addEventListener('mouseover', mouseOverEventFunction);
        li.addEventListener('mouseout', mouseOutEventFunction);
      }
    });
  }

  onClickBars(event: any){
    let navBarElement = this.elementRef.nativeElement.querySelectorAll('.navBar');
    this.navElement = this.elementRef.nativeElement.querySelector('nav');
    [].forEach.call(navBarElement, function(barElement: any){
      barElement.classList.toggle('clicked');
    });

    this.navElement.classList.toggle('expandNav');
    // if(nav.classList.contains('expandNav')){
    //   nav.
    // }
  }

  onTouchli(event: any){
    let actualLi = event.target.parentElement;
    
    // if(!actualLi.classList.contains('touched')){
    //   let liElements = this.elementRef.nativeElement.querySelectorAll('li');
    //   [].forEach.call(liElements, function(li: any){
    //     li.classList.remove('touched')     
    //   });
    actualLi.classList.toggle('touched');
    actualLi.childNodes[0].classList.toggle('hover')
    this.tmr = setTimeout(()=> this.navElement.classList.toggle('hide'), 150);
    this.tmr = setTimeout(()=> actualLi.classList.toggle('touched'), 150);
    this.tmr = setTimeout(()=> this.navElement.classList.toggle('hide'), 1000);
    this.tmr = setTimeout(()=> actualLi.childNodes[0].classList.toggle('hover'), 1000);
    
    this.navBarElement.click();
    // }
  }
  
  hoverEffect(event: any){
    if(event.target.tagName == 'A')
      event.target.classList.toggle('hover');
  }
}
