import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">
      <formly-field class="col" [field]="field"></formly-field>
      <div class="col-sm-2 d-flex align-items-center">
        <button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button>
      </div>
    </div>
    <div style="margin:30px 0;">
      <button class="btn btn-primary" type="button" (click)="add()">{{ to.addText }}</button>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
}


@Component({
  selector: 'formly-repeat-table-section',
  template: `
  <table class="table table-bordered">
  <thead>
    <tr>
      <th *ngFor="let fieldDetail of field?.fieldArray?.fieldGroup; let i = index">
      {{fieldDetail?.name}}</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let fieldGrp of field.fieldGroup; let i = index;">
      <td *ngFor="let fieldObj of fieldGrp.fieldGroup;let j=index;">
        <formly-field class="col" [field]="fieldObj"></formly-field>
      </td>
      <td><button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button></td>
    </tr>
    <tr>
    <td>
    Total
    </td>
    <ng-container *ngFor="let fieldDetail of field?.fieldArray?.fieldGroup; let i = index">
    <td *ngIf="fieldDetail?.templateOptions?.type=='number'">
      {{model | aggregatePipe : fieldDetail?.key }}
    </td>
    </ng-container>
    <td></td>
    </tr>
  </tbody>
</table>
<div style="margin:30px 0;">
  <button class="btn btn-primary" type="button" (click)="add()">{{ to.addText }}</button>
</div>
`
})
export class RepeatTableTypeComponent extends FieldArrayType {
}