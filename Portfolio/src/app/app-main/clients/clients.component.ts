import { Component, ElementRef, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [CookieService]
})
export class ClientsComponent implements OnInit {

  private nav: any;

  constructor(private elementRef: ElementRef, private cookieService: CookieService){}

  ngOnInit(): void {
    const cookieExists: boolean = this.cookieService.check('ActualPage');
    if(cookieExists)
      this.cookieService.delete('ActualPage');
    this.cookieService.set('ActualPage', 'clients');
  }

  ngAfterViewInit(){
    this.nav = this.elementRef.nativeElement.parentElement.parentElement.childNodes[0].querySelector('a');
    if(!this.nav.classList.contains('show')){
      this.nav.classList.add('show')
    }  
  }
}
