import { CommonFormGroups } from './../../shared/formgroups/common-form-groups';
import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Phone, PhoneType } from '../../shared/models/models';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  @Input() phonesGroup: FormArray;
  @Input() phone: Phone;

  phoneForm: FormGroup;
  commonFormGroups: CommonFormGroups;
  phoneTypes: PhoneType[];

  constructor(private fb: FormBuilder) {
    this.commonFormGroups = new CommonFormGroups(fb);
  }

  ngOnInit() {
    console.log('phone form - phonesGroup: ', this.phonesGroup);
    console.log('phone form - phone: ', this.phone);

    this.initForm(this.phone);
    this.getPhoneTypes();
    this.phonesGroup.push(this.phoneForm);
  }

  initForm(phone?: Phone) {
    this.phoneForm = this.commonFormGroups.initPhone(phone);
    console.log('phone form - phoneForm: ', this.phoneForm);
  }

  getPhoneTypes() {
    this.phoneTypes = [
      { id: '07d86f09-c3e2-4082-ae1d-8b668b0aedcb', type: 'Home' },
      { id: '9411e3a2-b4c9-4833-87ed-36f8dd360b8e', type: 'Cell' },
      { id: '07e8614f-077f-4469-8670-e7d083f2eb0c', type: 'Work' }
    ];
  }
}
