import { FormBuilder } from '@angular/forms/src/form_builder';
import { Phone } from '../models/models';
import { Helpers } from '../helpers/helpers';

export class CommonFormGroups {
  constructor(private fb: FormBuilder) {}


  initPhone(model?: Phone) {
    return this.fb.group({
      id: [model ? model.id : Helpers.emptyGuid],
      phoneNumber: [model ? model.phoneNumber : ''],
      phoneTypeId: [model ? model.phoneTypeId : Helpers.emptyGuid]
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
