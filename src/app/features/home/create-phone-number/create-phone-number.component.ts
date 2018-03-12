import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { PHONE_DEFAULT } from './create-phone-number.config';
import { Phone } from '../phone.model';

@Component({
  selector: 'tl-create-phone-number',
  templateUrl: './create-phone-number.component.html',
  styleUrls: ['./create-phone-number.component.scss']
})
export class CreatePhoneNumberComponent {
  @Input() public btnName: string = 'Create new phone';
  @Input()public newPhone: Phone = Object.assign({}, PHONE_DEFAULT);
  @Output() private submitHandler: EventEmitter<Phone> = new EventEmitter<Phone>();

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
