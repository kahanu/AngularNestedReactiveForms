import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Phone } from '../../shared/models/models';
import { Helpers } from '../../shared/helpers/helpers';

@Component({
  selector: 'app-phone-list-form',
  templateUrl: './phone-list-form.component.html',
  styleUrls: ['./phone-list-form.component.css']
})
export class PhoneListFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() phones: Phone[] = Array<Phone>();

  constructor(
      private cd: ChangeDetectorRef) {
   }

  ngOnInit() {
    this.parentForm.addControl('phones', new FormArray([]));
  }


  addPhone() {
    const phone = new Phone();
    phone.id = Helpers.emptyGuid;
    phone.phoneNumber = '';
    phone.phoneTypeId = Helpers.emptyGuid;

    if (!this.phones) {
      this.phones = [];
    }
    this.phones.push(phone);
    this.cd.detectChanges();
  }

  removePhone(i: number) {
    if (this.phones.length > 1) {
      this.phones.splice(i, 1);
      const control = <FormArray>this.parentForm.get('phones');
      control.removeAt(i);
    }
  }

}
