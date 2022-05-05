import { BrowserModule } from '@angular/platform-browser';
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
@NgModule({
  declarations: [
    AppComponent,
    DemoTextEditorComponent,
    DemoRuleBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuillModule.forRoot(),
    HttpClientModule,
    QueryBuilderModule,
    ReactiveFormsModule
    ,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
