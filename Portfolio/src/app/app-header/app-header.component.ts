import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  navBarElement: any;
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
    let eventFunction = this.onTouchli.bind(this);
    [].forEach.call(this.liElements, function(li: any){
      li.addEventListener('touchstart', eventFunction);      
    });
  }

  onClickBars(event: any){
    let navBarElement = this.elementRef.nativeElement.querySelectorAll('.navBar');
    let navElement = this.elementRef.nativeElement.querySelector('nav');
    [].forEach.call(navBarElement, function(barElement: any){
      barElement.classList.toggle('clicked');
    });

    navElement.classList.toggle('expandNav');
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
    this.navBarElement.click();
    this.tmr = setTimeout(()=> actualLi.classList.toggle('touched'), 150);
    // }
  }
}
