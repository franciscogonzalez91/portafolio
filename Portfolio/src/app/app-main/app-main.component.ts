import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss'],
  providers: [CookieService],
})


export class AppMainComponent implements OnInit {
  isMobile: boolean = true;

  constructor(private router: Router, private cookieService: CookieService){
    
  }

  ngOnInit(){
    const cookieExists: boolean = this.cookieService.check('ActualPage');
    if(cookieExists){
      let actualPage: string = this.cookieService.get('ActualPage');
      this.router.navigateByUrl(actualPage, {skipLocationChange: true});
    }
  }
}
