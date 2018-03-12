import { Component, Output, EventEmitter } from '@angular/core';
import { PHONE_DEFAULT } from './create-phone-number.config';

@Component({
  selector: 'tl-create-phone-number',
  templateUrl: './create-phone-number.component.html',
  styleUrls: ['./create-phone-number.component.scss']
})
export class CreatePhoneNumberComponent {
  public newPhone: any = PHONE_DEFAULT;

  @Output() private submitHandler: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  public onSubmit(): void {
    this.submitHandler.emit(this.newPhone);

    this.resetValue();
  }

  private resetValue(): void {
    this.newPhone = Object.assign({}, PHONE_DEFAULT);
  }
}
