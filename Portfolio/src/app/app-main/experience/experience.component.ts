import { Component, ElementRef, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [CookieService]
})

export class ExperienceComponent implements OnInit {

  constructor(private cookieService: CookieService, private elementRef: ElementRef){}

  ngOnInit(){
    const cookieExists: boolean = this.cookieService.check('ActualPage');
    if(cookieExists)
      this.cookieService.delete('ActualPage');
    this.cookieService.set('ActualPage', 'experience');
    let nav = this.elementRef.nativeElement.parentElement.parentElement.childNodes[0].querySelector('a');

    //If nav its not showing, show it
    if(!nav.classList.contains('show')){
      nav.classList.add('show');
    }  
  }
}
