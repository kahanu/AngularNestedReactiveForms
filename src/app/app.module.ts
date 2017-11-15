import { CompanyModule } from './company/company.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { PhoneListFormComponent } from './company/phone-list-form/phone-list-form.component';
import { PhoneFormComponent } from './company/phone-form/phone-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PhoneListFormComponent,
    PhoneFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
