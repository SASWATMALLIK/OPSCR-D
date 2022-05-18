import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'app-demo-formly',
  templateUrl: './demo-formly.component.html',
  //   styleUrls: ['./demo-text-editor.component.css']
})
export class DemoFormlyComponent22rr {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Name_of_the_post_to_be_advertise',
          type: 'input',
          templateOptions: {
            label: 'Name of the post to be advertise',
            placeholder: 'Name of the post to be advertise',
            required: true
          },
        },
        {
          key: 'Year_of_last_appointment_to_the_post',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Year of last appointment to the post',
            placeholder: 'Year of last appointment to the post',
            required: true
          }
        },
        {
          key: 'serviceGroup',
          type: 'input',
          templateOptions: {
            label: 'Services and Group',
            placeholder: 'Services and Group',
            required: true
          }
        },
        {
          key: 'rules',
          type: 'input',
          templateOptions: {
            label: 'Rules Under which the post are to be advertised',
            placeholder: 'Services and Group',
            required: true
          }
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'posttype',
          type: 'radio',
          templateOptions: {
            label: 'Post Type',
            placeholder: 'Placeholder',
            description: 'Post Type',
            options: [
              { value: 1, label: 'Permanent' },
              { value: 2, label: 'Temporary' }
            ],
          },
        },
        {
          key: 'tempPeriod',
          type: 'input',
          templateOptions: {
            label: 'Period if Temporary',
            placeholder: 'Period',
            required: true
          },
        },
        {
          key: 'isLikelyContinue',
          type: 'radio',
          templateOptions: {
            label: 'Is the Post Likely to Continue',
            options: [
              { value: 1, label: 'Yes' },
              { value: 2, label: 'No' }
            ],
          },
        },
        {
          key: 'terminationCondition',
          type: 'textarea',
          templateOptions: {
            label: 'Whether the appointment can be terminated, if then on what basis?',
            placeholder: 'Enter description',
          }
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [

        {
          key: 'payScale',
          type: 'textarea',
          templateOptions: {
            label: 'Pay scale',
            placeholder: 'Enter description',
          }
        },
        {
          key: 'otherAllownses',
          type: 'textarea',
          templateOptions: {
            label: 'Dearness and other allownses payble at rate',
            placeholder: 'Enter description',
          }
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'isHigherPayadmisable',
          type: 'radio',
          templateOptions: {
            label: 'Is the higher initial pay in the payscale admissible',
            placeholder: 'Placeholder',
            description: 'Post Type',
            options: [
              { value: 1, label: 'Yes' },
              { value: 2, label: 'No' }
            ],
          },
        },
        {
          key: 'criterialTograntInitialPay',
          type: 'textarea',
          templateOptions: {
            label: 'If yes then what is the criteria to grant initial pay?',
            placeholder: 'Enter description',
          }
        },
        {
          key: 'occuranceFD',
          type: 'radio',
          templateOptions: {
            label: 'has the occurance of F.D been obtained for above? ',
            options: [
              { value: 1, label: 'Yes' },
              { value: 2, label: 'No' }
            ],
          },
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'whetherPensonable',
          type: 'radio',
          templateOptions: {
            label: 'whether Pensonable and Non Pensonable',
            placeholder: 'Placeholder',
            description: 'Post Type',
            options: [
              { value: 1, label: 'Penonable' },
              { value: 2, label: 'NonPensonable' }
            ],
          },
        },
        {
          key: 'employeeContributary',
          type: 'radio',
          templateOptions: {
            label: 'If pensonable, whether contributary by the employee',
            options: [
              { value: 1, label: 'Yes' },
              { value: 2, label: 'No' }
            ],
          },
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr /> <h5> Details of number  of posts to be filled in  by direct recruitment</h5>',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
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
        },
        {
          key: 'XServicemenPostInfo',
          type: 'textarea',
          templateOptions: {
            label: 'DetailsRegarding the post reserved for x Service men',
            placeholder: 'Enter description',
          }
        },
        {
          key: 'PWDPostInfo',
          type: 'textarea',
          templateOptions: {
            label: 'Details Regarding for the post of physically Handicapt and details regarding the type of disability for the handicapped person',
            placeholder: 'Enter description',
          }
        },
        {
          key: 'sportsPersonPostInfo',
          type: 'textarea',
          templateOptions: {
            label: 'Details Regarding for the post of sports person',
            placeholder: 'Enter description',
          }
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Section7Key1',
          type: 'radio',
          templateOptions: {
            label: 'Whether in the event of non-avilablity or avilability of insuficient number of eligible women candidatesbelonging to any category or remaining vacancies will bw filled up by male candidates of that category',
            placeholder: 'Placeholder',
            description: 'Post Type',
            options: [
              { value: 1, label: 'Yes' },
              { value: 2, label: 'No' }
            ],
          },
        },
        {
          key: 'Section7Key2',
          type: 'radio',
          templateOptions: {
            label: 'Whether in the event of non-availibilityor of eligible and suitable scheduled tribes candidates, schedule cast candidates will be considered and vice - versa ?',
            options: [
              { value: 1, label: 'Yes' },
              { value: 2, label: 'No' }
            ],
          },
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Section8Key1',
          type: 'input',
          templateOptions: {
            label: 'If appointment is to be made on probation, the period of probation ?',
            placeholder: 'Probation Period',
          },
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Section9Key1',
          type: 'input',
          templateOptions: {
            label: 'Main Job Chart',
            placeholder: 'Probation Period',
          },
        },
        {
          key: 'Section9Key2',
          type: 'input',
          templateOptions: {
            label: 'Any stipulation for service in spesfic designated areas like KBK districts.',
            placeholder: 'details',
          },
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Section10Key1',
          type: 'textarea',
          templateOptions: {
            label: 'Educational',
            placeholder: 'Probation Period',
          },
        },
        {
          key: 'Section10Key2',
          type: 'input',
          templateOptions: {
            label: 'Experience If any, and period of experience required.',
            placeholder: 'details',
          },
        },
        {
          key: 'Section10Key3',
          type: 'input',
          templateOptions: {
            label: 'Training',
            placeholder: 'details',
          },
        },
        {
          key: 'Section10Key6',
          type: 'textarea',
          templateOptions: {
            label: 'Other qualification, if any',
            placeholder: '',
          },
        },
        {
          key: 'Section10Key4',
          type: 'input',
          templateOptions: {
            label: 'Physical standard (Cast wise & sex wise) any',
            placeholder: 'details',
          },
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Section11Key1',
          type: 'radio',
          templateOptions: {
            label: 'Are equivalent qualifications acceptable?',
            options: [
              { value: 1, label: 'Yes' },
              { value: 2, label: 'No' }
            ],
          },
        },
        {
          key: 'Section11Key2',
          type: 'textarea',
          templateOptions: {
            label: 'If yes give details thereof',
          },
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Section12Key1',
          type: 'textarea',
          templateOptions: {
            label: 'Educational',
          },
        },
        {
          key: 'Section12Key2',
          type: 'input',
          templateOptions: {
            label: 'Experience.',
            placeholder: 'details',
          },
        },
        {
          key: 'Section12Key3',
          type: 'input',
          templateOptions: {
            label: 'Training',
            placeholder: 'details',
          },
        },
        {
          key: 'Section12Key6',
          type: 'textarea',
          templateOptions: {
            label: 'Others',
            placeholder: '',
          },
        },
      ]
    },
    {
      className: 'section-label',
      template: '<hr /> <h5>Age limit and reference date for calculation of age as provided in recruitment rules</h5>',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Section13Key1',
          type: 'input',
          templateOptions: {
            label: 'Minimum Age',
            type: "number"
          },
        }, {
          key: 'Section13Key2',
          type: 'input',
          templateOptions: {
            label: 'Maximum Age',
            type: "number"
          },
        },
        {
          key: 'Section13Key3',
          type: 'datepicker',
          templateOptions: {
            label: 'Reference Data For Calculation of Age',
            placeholder: 'Placeholder',
            required: true,
          },
        }
      ]
    },
    {
      className: 'section-label',
      template: '<hr /> <h5>Details of relaxation permissable to candidates, in upper age limit for the following </h5>',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Section14Key1',
          type: 'input',
          templateOptions: {
            label: 'Schedule Castes',
            type: "number"
          },
        },
        {
          key: 'Section14Key2',
          type: 'input',
          templateOptions: {
            label: 'Schedule Tribes',
            type: "number"
          },
        },
        {
          key: 'Section14Key3',
          type: 'input',
          templateOptions: {
            label: 'SEBC',
            type: "number"
          },
        },
        {
          key: 'Section14Key4',
          type: 'input',
          templateOptions: {
            label: 'Women',
            type: "number"
          },
        },
        {
          key: 'Section14Key5',
          type: 'input',
          templateOptions: {
            label: 'ExServicemen',
            type: "number"
          }
        },
        {
          key: 'Section14Key6',
          type: 'input',
          templateOptions: {
            label: 'Physically Handicapped',
            type: "number"
          },
        },
        {
          key: 'Section14Key7',
          type: 'textarea',
          templateOptions: {
            label: 'Service experienced under state Govt. / Public sector Under taking/ Local bodies etc.',
            type: "number"
          },
        },
        {
          key: 'Section14Key8',
          type: 'textarea',
          templateOptions: {
            label: 'Any Other.',
            type: "number"
          },
        }
      ]
    }, {
      className: 'section-label',
      template: '<hr />',
    },
    {
      fieldGroupClassName: 'col-md-9',
      fieldGroup: [
        {
          key: 'Section15Key1',
          type: 'select',
          templateOptions: {

            label: 'Nationality',
            type: "number",
            options: [
              { label: 'INDIAN', value: 'INDIAN' }
            ],
          },
        },
        {
          key: 'Section15Key2',
          type: 'select',
          templateOptions: {
            multiple: true,
            label: 'Domicile',
            type: "number",
            options: [
              { label: 'ODISHA', value: 'ODISHA' },
              { label: 'CHATISGARH', value: 'CHATISGARH' }
            ],
          },
        }
      ]
    },
  ];

  onSubmit(model) {
    console.log(model);
  }
  ConvertFormToPDFTemplete(model: any, fields: FormlyFieldConfig[]) {
    console.log(model);
    console.log(fields);
  }
}
