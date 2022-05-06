import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-form-datepicker-type',
  template: `
    <input type="text" id="dob-id" class="form-control calendar" placement="bottom" bsDatepicker [formlyAttributes]="field"
                       [bsConfig]="bsConfig" placeholder="YYYY-MM-DD"
                       [class.is-invalid]="showError">`
  ,
})
export class DatepickerTypeComponent extends FieldType {
  // Optional: only if you want to rely on `MatInput` implementation
  bsConfig: Partial<BsDatepickerConfig> = {
		dateInputFormat: 'YYYY-MM-DD',
		showWeekNumbers: false,
		containerClass: 'theme-dark-blue'
	};
}
