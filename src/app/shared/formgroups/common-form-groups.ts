import { FormBuilder } from '@angular/forms';
import { Phone } from '../models/models';
import { Helpers } from '../helpers/helpers';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonFormGroups {
  constructor(private fb: FormBuilder) {}

  initPhone(model?: Phone) {
    return this.fb.group({
      id: [model.id || Helpers.emptyGuid],
      phoneNumber: [model.phoneNumber || ''],
      phoneTypeId: [model.phoneTypeId || Helpers.emptyGuid]
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
}
