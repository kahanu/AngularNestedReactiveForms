import { Helpers } from './../shared/helpers/helpers';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Company, Phone, PhoneType } from '../shared/models/models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'dsg-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyFormGroup: FormGroup;
  company: Company;
  phoneTypes: PhoneType[];
  formResult: Company;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.getCompany();
    this.getPhoneTypes();
    this.initForm();
  }

  getCompany() {
    this.company = {
      id: 1,
      name: 'Acme Widgets, LLC',
      fein: '95-10101039',
      phones: [
        { id: 1, phoneNumber: '818 384-4438', phoneTypeId: 2 },
        { id: 2, phoneNumber: '626 393-1192', phoneTypeId: 1 }
      ]
    };
  }

  getPhoneTypes() {
    this.phoneTypes = [
      { id: 1, type: 'Home' },
      { id: 2, type: 'Cell' },
      { id: 3, type: 'Work' }
    ];
  }

  initPhone(model?: Phone) {
    return this.fb.group({
      phoneNumber: [model ? model.phoneNumber : ''],
      phoneTypeId: [model ? model.phoneTypeId : 1]
    });
  }

  initPhoneArray(model?: Phone[]) {
    let arr = this.fb.array([]);

    if (model) {
      const fgs = model.map(item => this.initPhone(item));
      arr = this.fb.array(fgs);
    }

    return arr;
  }

  initForm(model?: Company) {
    this.companyFormGroup = this.fb.group({
      id: [model ? model.id : Helpers.emptyGuid],
      name: [model ? model.name : ''],
      fein: [model ? model.fein : ''],
      phones: model ? this.initPhoneArray(model.phones) : this.initPhoneArray()
    });
  }

  save() {
    const formValue = this.companyFormGroup.value;
    this.formResult = formValue;
    console.log('formValue: ', formValue);
  }

  addPhone() {
    const control = <FormArray>this.companyFormGroup.get('phones');
    control.push(this.initPhone());
  }

  removePhone(i: number) {
    const control = <FormArray>this.companyFormGroup.get('phones');
    control.removeAt(i);
  }
}
