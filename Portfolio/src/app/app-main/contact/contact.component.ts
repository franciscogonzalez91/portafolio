import { Component, ElementRef, OnInit } from '@angular/core';
import { FormInputComponent } from '../../uiComponents/form-input/form-input.component'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private elementRef: ElementRef ,private cookierService: CookieService){}

  ngOnInit(): void {
    const cookieExists: boolean = this.cookierService.check('ActualPage');
    if(cookieExists)
      this.cookierService.delete('ActualPage');
    this.cookierService.set('ActualPage', 'contact');

    let nav = this.elementRef.nativeElement.parentElement.parentElement.childNodes[0].querySelector('a');
    if(!nav.classList.contains('show'))
      nav.classList.add('show');
  }
}
