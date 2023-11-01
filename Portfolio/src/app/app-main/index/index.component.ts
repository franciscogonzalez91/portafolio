import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, ElementRef, ChangeDetectorRef  } from '@angular/core';
import { Route, Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger('fadeName', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden <=> visible', animate('2s ease-in-out'))
     ]),
    trigger('fadeJobTitle', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden <=> visible', animate('2s ease-in-out'))
    ])
  ]
})
export class IndexComponent {
  
  tmr: ReturnType<typeof setTimeout> | undefined;
  startDivs: any;
  isNameTextVisible: boolean = false;
  isJobTitleTextVisible: boolean = false;
  nav: any;

  constructor(private elementRef: ElementRef, private cdref: ChangeDetectorRef, private router: Router){}

  ngAfterViewInit(){
    this.nav = this.elementRef.nativeElement.parentElement.parentElement.childNodes[0].querySelector('a');
    if(this.nav.classList.contains('show')){
      this.nav.classList.remove('show')
    }  
    this.nameTextVisible(true);
    this.tmr = setTimeout(()=> this.nameTextVisible(false), 2000);
    this.tmr = setTimeout(()=> this.jobTitleTextVisible(true), 3000);
    this.tmr = setTimeout(()=> this.jobTitleTextVisible(false), 5000);  
    this.tmr = setTimeout(() => {this.router.navigate(['about'])}, 7000);
  }

  nameTextVisible(isVisible: boolean){
    this.isNameTextVisible = isVisible;
    this.cdref.detectChanges();
  }

  jobTitleTextVisible(isVisible: boolean){
    this.isJobTitleTextVisible = isVisible;
    this.cdref.detectChanges();
  }
}
