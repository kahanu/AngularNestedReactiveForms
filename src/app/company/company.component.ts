import { Helpers } from './../shared/helpers/helpers';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Company, Phone, PhoneType } from '../shared/models/models';
import { FormBuilder } from '@angular/forms';
import { CommonFormGroups } from '../shared/formgroups/common-form-groups';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyFormGroup: FormGroup;
  company: Company;
  phoneTypes: PhoneType[];
  formResult: Company;
  commonFormGroups: CommonFormGroups;
  useBlankForm = true;

  constructor(private fb: FormBuilder) {
    this.commonFormGroups = new CommonFormGroups(fb);
  }

  ngOnInit() {
    // this.getCompany();
    // this.getPhoneTypes();
    this.initForm();
  }

  getCompany() {
    this.company = {
      id: Helpers.newGuid,
      name: 'Acme Widgets, LLC',
      fein: '95-10101039',
      phones: [
        { id: Helpers.newGuid, phoneNumber: '818 384-4438', phoneTypeId: '9411e3a2-b4c9-4833-87ed-36f8dd360b8e' },
        { id: Helpers.newGuid, phoneNumber: '626 393-1192', phoneTypeId: '07d86f09-c3e2-4082-ae1d-8b668b0aedcb' }
      ]
    };
  }

  initForm(model?: Company) {
    this.companyFormGroup = this.fb.group({
      id: [model ? model.id : Helpers.emptyGuid],
      name: [model ? model.name : ''],
      fein: [model ? model.fein : ''],
      phones: model ? this.commonFormGroups.initPhoneArray(model.phones) : this.commonFormGroups.initPhoneArray()
    });
    console.log('company phones: ', this.companyFormGroup.get('phones'));
  }

  save() {
    const formValue = this.companyFormGroup.value;
    this.formResult = formValue;
    console.log('formValue: ', formValue);
  }

  // addPhone() {
  //   const control = <FormArray>this.companyFormGroup.get('phones');
  //   control.push(this.commonFormGroups.initPhone());
  // }

  // removePhone(i: number) {
  //   const control = <FormArray>this.companyFormGroup.get('phones');
  //   control.removeAt(i);
  // }
}
