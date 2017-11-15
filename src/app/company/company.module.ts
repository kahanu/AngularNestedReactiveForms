import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared/shared.module';
import { PhoneListFormComponent } from './phone-list-form/phone-list-form.component';
import { PhoneFormComponent } from './phone-form/phone-form.component';

@NgModule({
  imports: [SharedModule, CompanyRoutingModule],
  declarations: [
    CompanyComponent
  ]
})
export class CompanyModule {}
