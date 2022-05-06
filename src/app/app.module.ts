import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoTextEditorComponent } from './demo-text-editor/demo-text-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoRuleBuilderComponent } from './demo-rule-builder/demo-rule-builder.component';
import { QueryBuilderModule } from "angular2-query-builder";
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators'
import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { DemoFormlyComponent } from './demo-formly/demo-formly.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatepickerTypeComponent } from './type';
@NgModule({
  declarations: [
    AppComponent,
    DemoTextEditorComponent,
    DemoRuleBuilderComponent,
    DemoFormlyComponent,
    DatepickerTypeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    QuillModule.forRoot(),
    HttpClientModule,
    QueryBuilderModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    RxReactiveDynamicFormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() ,
    FormlyModule.forRoot({
      types: [{
					name: 'datepicker',
					component: DatepickerTypeComponent,
					defaultOptions: {
						templateOptions: {
							datepickerOptions: {}
						}
					}
				},]
    }),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
