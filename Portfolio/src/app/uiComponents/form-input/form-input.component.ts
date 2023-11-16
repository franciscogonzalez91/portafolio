import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input() lblText: string = "";
  @Input() isTextArea: boolean = false;
}
