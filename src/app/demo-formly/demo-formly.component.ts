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
      {
        key: 'investments',
        type: 'repeat-table',
        templateOptions: {
          addText: 'Add another investment',
        },
        fieldArray: {
          fieldGroup: [
            {
              className: 'col-sm-4',
              type: 'input',
              key: 'Category',
              name:'Category',
              templateOptions: {
                required: true,
              },
            },
            {
              type: 'input',
              key: 'No_Of_Posts',
              className: 'col-sm-4',
              name:'No of Posts',
              templateOptions: {
                type: 'number'
              },
            },
            {
              type: 'input',
              key: 'Women_Posts',
              className: 'col-sm-4',
              name:'No of Women Posts',
              templateOptions: {
                type: 'number'
              },
            }
          ],
        },
      },
      {
        key: 'SecondTable',
        type: 'repeat',
        wrappers: ['panel'],
        templateOptions: {
          addText: 'Add UNivers Sub Category',
          label:"Test Panel Lebel 1"
        },
        fieldArray: {
          fieldGroup: [
            {
              className: 'col-sm-4',
              type: 'input',
              key: 'Category',
              name:'Category',
              templateOptions: {
                required: true,
              },
            },
            {
              type: 'input',
              key: 'No_Of_Posts',
              className: 'col-sm-4',
              name:'No of Posts',
              templateOptions: {
                type: 'number'
              },
            },
            {
              type: 'input',
              key: 'Women_Posts',
              className: 'col-sm-4',
              name:'No of Women Posts',
              templateOptions: {
                type: 'number'
              },
            },
            {
              key: 'SecondTable',
              type: 'repeat',
              wrappers: ['panel'],
              templateOptions: {
                label:"Test Panel Lebel 2",
                addText: 'Add UNivers Sub Category',
              },
              fieldArray: {
                fieldGroup: [
                  {
                    className: 'col-sm-4',
                    type: 'input',
                    key: 'Category',
                    name:'Category',
                    templateOptions: {
                      required: true,
                    },
                  },
                  {
                    type: 'input',
                    key: 'No_Of_Posts',
                    className: 'col-sm-4',
                    name:'No of Posts',
                    templateOptions: {
                      type: 'number'
                    },
                  },
                  {
                    type: 'input',
                    key: 'Women_Posts',
                    className: 'col-sm-4',
                    name:'No of Women Posts',
                    templateOptions: {
                      type: 'number'
                    },
                  },
                  
                ],
              },
            }
          ],
        },
      }
  ];
  
    onSubmit(model) {
      console.log(model);
    }
}
