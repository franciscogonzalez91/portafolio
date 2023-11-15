import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [CookieService]
})
export class ClientsComponent implements OnInit {

  constructor(private cookieService: CookieService){}

  ngOnInit(): void {
    const cookieExists: boolean = this.cookieService.check('ActualPage');
    if(cookieExists)
      this.cookieService.delete('ActualPage');
    this.cookieService.set('ActualPage', 'clients');
  }
}
