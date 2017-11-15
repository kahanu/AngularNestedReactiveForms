import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Phone, PhoneType, Company } from '../../shared/models/models';
import { FormArray } from '@angular/forms/src/model';
import { Helpers } from '../../shared/helpers/helpers';
import { ChangeDetectorRef } from '@angular/core/src/change_detection/change_detector_ref';

@Component({
  selector: 'app-phone-list-form',
  templateUrl: './phone-list-form.component.html',
  styleUrls: ['./phone-list-form.component.css']
})
export class PhoneListFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() phones: Phone[] = Array<Phone>();

  constructor(
      private fb: FormBuilder) {
   }

  ngOnInit() {
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
  }

  removePhone(i: number) {
    if (this.phones.length > 1) {
      this.phones.splice(i, 1);
      const control = <FormArray>this.parentForm.get('phones');
      control.removeAt(i);
    }
  }

}
