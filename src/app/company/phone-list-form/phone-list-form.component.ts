import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Phone } from '../../shared/models/models';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-phone-list-form',
  templateUrl: './phone-list-form.component.html',
  styleUrls: ['./phone-list-form.component.css']
})
export class PhoneListFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() phoneData: Phone[] = [];

  constructor() { }

  ngOnInit() {
    this.parentForm.addControl('phones', new FormArray([]));
  }

  // addPhone() {
  //   const control = <FormArray>this.companyFormGroup.get('phones');
  //   control.push(this.initPhone());
  // }

  // removePhone(i: number) {
  //   const control = <FormArray>this.companyFormGroup.get('phones');
  //   control.removeAt(i);
  // }

}
