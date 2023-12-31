import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, ElementRef, ChangeDetectorRef, OnInit  } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [CookieService],
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
export class IndexComponent implements OnInit {  
  tmr: ReturnType<typeof setTimeout> | undefined;
  startDivs: any;
  isNameTextVisible: boolean = false;
  isJobTitleTextVisible: boolean = false;
  nav: any;  

  constructor(private elementRef: ElementRef, private  cdref: ChangeDetectorRef, private router: Router, private cookieService: CookieService){

  }

  ngOnInit(): void {
    const cookieExists: boolean = this.cookieService.check('ActualPage');
    if(cookieExists)
      this.cookieService.delete('ActualPage');
    this.cookieService.set('ActualPage', '');
  }
 
  ngAfterViewInit(){
    this.nav = this.elementRef.nativeElement.parentElement.parentElement.childNodes[0].querySelector('a');
    if(this.nav.classList.contains('show')){
      this.nav.classList.remove('show')
    }  
    this.nameTextVisible(true);
    this.tmr = setTimeout(()=> this.nameTextVisible(false), 2000);
    this.tmr = setTimeout(()=> this.jobTitleTextVisible(true), 3000);
    this.tmr = setTimeout(()=> this.jobTitleTextVisible(false), 5000);  
    this.tmr = setTimeout(() => {this.router.navigateByUrl('about', {skipLocationChange: true})}, 7000);
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
