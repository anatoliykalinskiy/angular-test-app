import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DiagnosisListComponent {
  form: FormGroup;
  minDate = moment();
  constructor(private fb: FormBuilder) {
    const formObj = {
      date: [''],
      conditions: [[]],
      json: [''],
    }
    this.form = this.fb.group(formObj);
  }
  add(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.form.controls['conditions'].value.push({
      'id': uuidv4(),
      'context': {
        'identifier': {
          'type': {
            'coding': [
              {
                'system': 'eHealth/resources',
                'code': 'encounter'
              }
            ]
          },
          'value': '' // id from response
        }
      },
      'code': {
        'coding': [
          {
            'system': 'eHealth/ICPC2/condition_codes',
            'code': '' // code from response 'P99'
          }
        ]
      },
      'notes': '', // set from input
      'onset_date': '' // set after selecting item from Autocomplete '2023-10-05T15:01:31.375Z'
    })
  }

  onSubmit(): void {
    console.log({
      ...this.form.getRawValue(),
      date: moment(this.form.getRawValue()['date'] || new Date()).toISOString()
    })

    const jsonObj: {encounter: any, conditions?: any[]} = {
      encounter: {
        date: moment(this.form.getRawValue()['date'] || new Date()).toISOString()
      }
    }

    if (this.form.controls['conditions']?.value.length) {
      jsonObj['conditions'] = this.form.controls['conditions'].value
    }

    this.form.controls['json'].patchValue(JSON.stringify(jsonObj))
  }
}
