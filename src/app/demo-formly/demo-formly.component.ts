import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'app-demo-formly',
  templateUrl: './demo-formly.component.html',
  //   styleUrls: ['./demo-text-editor.component.css']
})
export class DemoFormlyComponent {
    form = new FormGroup({});
    model = { };
    fields: FormlyFieldConfig[] = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          placeholder: 'Enter name',
          required: true
        },
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'Enter email',
        }
      },
      {
        key: 'amount',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: 'Amount',
          placeholder: 'Enter amount',
        }
      },
      {
        key: 'date_of_birth',
        type: 'datepicker',
        templateOptions: {
          label: 'Datepicker',
          placeholder: 'Placeholder',
          // description: 'Description',
          required: true,
        },
      },
      {
        key: 'terms',
        type: 'checkbox',
        templateOptions: {
          label: 'Accept terms',
          description: 'Please accept our terms',
          required: true,
        },
      },
      {
        key: 'description',
        type: 'textarea',
        templateOptions: {
          label: 'Description',
          placeholder: 'Enter description',
        }
      },
      {
        key: 'gender',
        type: 'radio',
        templateOptions: {
          label: 'Gender',
          placeholder: 'Placeholder',
          description: 'Fill in your gender',
          options: [
            { value: 1, label: 'Male' },
            { value: 2, label: 'Femail' },
            { value: 3, label: 'I don\'t want to share that' },
          ],
        },
      },
  ];
  
    onSubmit(model) {
      console.log(model);
    }
}
