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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.company = this.getCompany();
    this.initForm(this.company);
  }

  getCompany(): Company {
    return {
      id: 1,
      name: 'Acme Widgets, LLC',
      fein: '95-10101039',
      phones: null
    };
  }

  initPhone() {
    return this.fb.group({
      phoneNumber: ['']
    });
  }

  initPhoneArray() {
    const arr = this.fb.array([]);

    return arr;
  }


  initForm(model?: Company) {
    this.companyFormGroup = this.fb.group({
      id: [model ? model.id : Helpers.emptyGuid],
      name: [model ? model.name : ''],
      fein: [model ? model.fein : ''],
      phones: this.initPhoneArray()
    });
  }

  save() {
    const formValue = this.companyFormGroup.value;
    this.formResult = formValue;
    console.log('formValue: ', formValue);
  }

  addPhone() {
    const control = (<FormArray>this.companyFormGroup.get('phones'));
    control.push(this.initPhone());
  }

  removePhone(i: number) {
    const control = (<FormArray>this.companyFormGroup.get('phones'));
    control.removeAt(i);
  }
}
