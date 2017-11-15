import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Phone, PhoneType, Company } from '../../shared/models/models';
import { FormArray } from '@angular/forms/src/model';
import { CommonFormGroups } from '../../shared/formgroups/common-form-groups';
import { Helpers } from '../../shared/helpers/helpers';
import { ChangeDetectorRef } from '@angular/core/src/change_detection/change_detector_ref';

@Component({
  selector: 'app-phone-list-form',
  templateUrl: './phone-list-form.component.html',
  styleUrls: ['./phone-list-form.component.css']
})
export class PhoneListFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() phones: Phone[] = [];
  commonFormGroups: CommonFormGroups;
  // phoneTypes: PhoneType[];

  constructor(
      private fb: FormBuilder) {
    this.commonFormGroups = new CommonFormGroups(fb);
   }

  ngOnInit() {
    console.log('init phone list: ', this.parentForm);
    // this.getPhoneTypes();
  }

  // getPhoneTypes() {
  //   this.phoneTypes = [
  //     { id: '07d86f09-c3e2-4082-ae1d-8b668b0aedcb', type: 'Home' },
  //     { id: '9411e3a2-b4c9-4833-87ed-36f8dd360b8e', type: 'Cell' },
  //     { id: '07e8614f-077f-4469-8670-e7d083f2eb0c', type: 'Work' }
  //   ];
  // }

  addPhone() {
    console.log('adding phone...');
    const phone = new Phone();
    phone.id = Helpers.emptyGuid;
    phone.phoneNumber = '';
    phone.phoneTypeId = Helpers.emptyGuid;

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
