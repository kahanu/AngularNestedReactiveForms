import { Helpers } from './../shared/helpers/helpers';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Company } from '../shared/models/models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'dsg-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyFormGroup: FormGroup;
  company: Company;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.company = this.getCompany();
    this.initForm(this.company);
  }

  getCompany(): Company {
    return {
      id: 1,
      name: 'Acme Widgets, LLC'
    };
  }

  initForm(model?: Company) {
    this.companyFormGroup = this.fb.group({
      id: [model ? model.id : Helpers.emptyGuid],
      name: [model ? model.name : '']
    });
  }

}
