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
  model = {};
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
    // {
    //   key: 'investments',
    //   type: 'repeat-table',
    //   templateOptions: {
    //     addText: 'Add another investment',
    //   },
    //   fieldArray: {
    //     fieldGroup: [
    //       {
    //         className: 'col-sm-4',
    //         type: 'input',
    //         key: 'Category',
    //         name: 'Category',
    //         templateOptions: {
    //           required: true,
    //         },
    //       },
    //       {
    //         type: 'input',
    //         key: 'No_Of_Posts',
    //         className: 'col-sm-4',
    //         name: 'No of Posts',
    //         templateOptions: {
    //           type: 'number'
    //         },
    //       },
    //       {
    //         type: 'input',
    //         key: 'Women_Posts',
    //         className: 'col-sm-4',
    //         name: 'No of Women Posts',
    //         templateOptions: {
    //           type: 'number'
    //         },
    //       }
    //     ],
    //   },
    // },
    {
      key: 'RankOfficerTable',
      type: 'repeat',
      wrappers: ['panel'],
      templateOptions: {
        addText: 'Add Vacancies Of Rank Of Professor',
        label: "Vacancies Of Rank Of Professor"
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Subject',
            type: 'select',
            templateOptions: {
              label: 'Subject',
              options: [
                { id: '1', name: 'Constitutional Law' },
                { id: '2', name: 'Criminal Law' },
                { id: '3', name: 'International Law' },
                { id: '4', name: 'Business Law' },
                { id: '5', name: 'Family Law' },
                { id: '6', name: 'Human Rights Law' },
              ],
              valueProp: 'id',
              labelProp: 'name',
            },
          },
          {
            key: 'SubjectWiseVacanciesDetails',
            type: 'repeat-table',
            wrappers: ['panel'],
            templateOptions: {
              addText: 'Add Reservation Category Wise vacancy details',
              label: "Category wise post details"
            },
            fieldArray: {
              fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'select',
                  key: 'Category',
                  name: 'Vacancies With Reservation Category',
                  templateOptions: {
                    required: true,
                    options: [
                      { id: '1', name: 'SC' },
                      { id: '2', name: 'ST' },
                      { id: '3', name: 'UR' },
                      { id: '4', name: 'SEBC' }
                    ],
                    valueProp: 'id',
                    labelProp: 'name',
                  },
                },
                {
                  type: 'input',
                  key: 'No_Of_Posts',
                  className: 'col-sm-4',
                  name: 'No of Posts to be filled',
                  templateOptions: {
                    type: 'number'
                  },
                },
                {
                  type: 'input',
                  key: 'Women_Posts',
                  className: 'col-sm-4',
                  name: 'No of Women Posts to be filled',
                  templateOptions: {
                    type: 'number'
                  },
                },

              ],
            },
          }
        ],
      },
    },
    {
      key: 'RankOfficerTable2',
      type: 'repeat',
      wrappers: ['panel'],
      templateOptions: {
        addText: 'Add Vacancies Of Rank Of Professor',
        label: "Vacancies Of Rank Of Professor"
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Subject',
            type: 'select',
            templateOptions: {
              label: 'Subject',
              options: [
                { id: '1', name: 'Constitutional Law' },
                { id: '2', name: 'Criminal Law' },
                { id: '3', name: 'International Law' },
                { id: '4', name: 'Business Law' },
                { id: '5', name: 'Family Law' },
                { id: '6', name: 'Human Rights Law' },
              ],
              valueProp: 'id',
              labelProp: 'name',
            },
          },
          {
            key: 'SubjectWiseVacanciesDetails',
            type: 'repeat',
            wrappers: ['panel'],
            templateOptions: {
              addText: 'Add Reservation University Wise vacancy details',
              label: "University wise post details"
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'university',
                  type: 'select',
                  templateOptions: {
                    label: 'Univesity',
                    options: [
                      { id: '1', name: 'Utkal university' },
                      { id: '2', name: 'Sambalpur' }
                    ],
                    valueProp: 'id',
                    labelProp: 'name',
                  },
                },
                {
                  key: 'Specialization',
                  type: 'input',
                  templateOptions: {
                    label: 'Specialization',
                    placeholder: 'Enter Specialization Details',
                    required: true
                  },
                },
                {
                  key: 'SubjectUniversityWiseVacanciesDetails',
                  type: 'repeat-table',
                  wrappers: ['panel'],
                  templateOptions: {
                    addText: 'Add Reservation Category Wise vacancy details',
                    label: "Category wise post details"
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        className: 'col-sm-4',
                        type: 'select',
                        key: 'Category',
                        name: 'Vacancies With Reservation Category',
                        templateOptions: {
                          required: true,
                          options: [
                            { id: '1', name: 'SC' },
                            { id: '2', name: 'ST' },
                            { id: '3', name: 'UR' },
                            { id: '4', name: 'SEBC' }
                          ],
                          valueProp: 'id',
                          labelProp: 'name',
                        },
                      },
                      {
                        type: 'input',
                        key: 'No_Of_Posts',
                        className: 'col-sm-4',
                        name: 'No of Posts to be filled',
                        templateOptions: {
                          type: 'number'
                        },
                      },
                      {
                        type: 'input',
                        key: 'Women_Posts',
                        className: 'col-sm-4',
                        name: 'No of Women Posts to be filled',
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
        ],
      },
    }
  ];

  onSubmit(model) {
    console.log(model);
  }
  ConvertFormToPDFTemplete(model:any,fields: FormlyFieldConfig[])
  {

  }
}
