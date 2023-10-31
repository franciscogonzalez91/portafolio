import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, ElementRef, ChangeDetectorRef  } from '@angular/core';
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

  constructor(private elementref: ElementRef, private cdref: ChangeDetectorRef){}

  ngAfterViewInit(){
    this.nameTextVisible(true);
    this.tmr = setTimeout(()=> this.nameTextVisible(false), 2000);
    this.tmr = setTimeout(()=> this.jobTitleTextVisible(true), 3000);
    this.tmr = setTimeout(()=> this.jobTitleTextVisible(false), 5000);    
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
