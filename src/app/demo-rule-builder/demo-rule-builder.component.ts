import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { QueryBuilderClassNames, QueryBuilderConfig, Rule, RuleSet } from 'angular2-query-builder';
// import { FormBuilder, FormControl } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-demo-rule-builder',
  templateUrl: './demo-rule-builder.component.html',
  //   styleUrls: ['./demo-text-editor.component.css']
})
export class DemoRuleBuilderComponent {
  // public queryCtrl: FormControl;

  public bootstrapClassNames: QueryBuilderClassNames = {
    removeIcon: 'fa fa-minus',
    addIcon: 'fa fa-plus',
    arrowIcon: 'fa fa-chevron-right px-2',
    button: 'btn',
    buttonGroup: 'btn-group',
    rightAlign: 'order-12 ml-auto',
    switchRow: 'd-flex px-2',
    switchGroup: 'd-flex align-items-center',
    switchRadio: 'custom-control-input',
    switchLabel: 'custom-control-label',
    switchControl: 'custom-control custom-radio custom-control-inline',
    row: 'row p-2 m-1',
    rule: 'border',
    ruleSet: 'border',
    invalidRuleSet: 'alert alert-danger',
    emptyWarning: 'text-danger mx-auto',
    operatorControl: 'form-control',
    operatorControlSize: 'col-auto pr-0',
    fieldControl: 'form-control',
    fieldControlSize: 'col-auto pr-0',
    entityControl: 'form-control',
    entityControlSize: 'col-auto pr-0',
    inputControl: 'form-control',
    inputControlSize: 'col-auto'
  };
  // query: any = {
    
  //   "condition": "and",
  //   "rules": [
  //     {
  //       "field": "age",
  //       "operator": "<=",
  //       "entity": "physical",
  //       "value": 21,
  //       "isMandatoryRule":true
  //     },
  //     {
  //       "field": "birthday",
  //       "operator": "=",
  //       "value": "2022-04-02",
  //       "entity": "nonphysical"
  //     },
  //     {
  //       "collapsed":false,
  //       "condition": "or",
  //       "rules": [
  //         {
  //           "field": "gender",
  //           "operator": "=",
  //           "entity": "physical",
  //           "value": "m"
  //         },
  //         {
  //           "field": "occupation",
  //           "operator": "in",
  //           "entity": "nonphysical",
  //           "value": [
  //             "student",
  //             "teacher"
  //           ]
  //         },
  //         {
  //           "field": "school",
  //           "operator": "contains",
  //           "entity": "nonphysical",
  //           "value": "HIGH"
  //         },
  //         {
  //           "field": "educated",
  //           "operator": "=",
  //           "entity": "nonphysical",
  //           "value": true
  //         }
  //       ]
  //     },
  //     {
  //       "condition": "and",
  //       "rules": [
  //         {
  //           "field": "occupation",
  //           "operator": "=",
  //           "value": "student",
  //           "entity": "nonphysical",
  //         },
  //         {
  //           "field": "age",
  //           "operator": ">",
  //           "value": 32,
  //           "entity": "physical",
  //         }
  //       ]
  //     }
  //   ]
  // };
  query: any = {
    
    "condition": "and",
    "rules": [
      {
        "field": "age",
        "operator": ">=",
        "entity": "physical",
        "value": 18,
        "isMandatoryRule":true
      },
      {
        "field": "age",
        "operator": "<=",
        "value": "32",
        "entity": "physical",
        "isMandatoryRule":true
      }
    ]
  };
  config: QueryBuilderConfig = {
    entities:{physical:{name:"physical"},nonphysical:{name:"nonphysical"}},
    fields: {
      age: { name: 'Age', type: 'number',entity:"physical" },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          { name: 'Male', value: 'm' },
          { name: 'Female', value: 'f' }
        ],
        entity:"physical"
      },
      name: { name: 'Name', type: 'string',entity:"nonphysical" },
      notes: { name: 'Notes', type: 'textarea', operators: ['=', '!='],entity:"nonphysical" },
      educated: { name: 'College Degree?', type: 'boolean',entity:"nonphysical" },
      birthday: {
        name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date()),
        entity:"nonphysical" 
      },
      school: { name: 'School', type: 'string', nullable: true ,entity:"nonphysical"},
      occupation: {
        name: 'Occupation',
        type: 'category',
        options: [
          { name: 'Student', value: 'student' },
          { name: 'Teacher', value: 'teacher' },
          { name: 'Unemployed', value: 'unemployed' },
          { name: 'Scientist', value: 'scientist' }
        ]
        ,entity:"nonphysical"
      },
      caste: {
        name: 'caste',
        type: 'category',
        options: [
          { name: 'General', value: 'General' },
          { name: 'SC', value: 'SC' },
          { name: 'ST', value: 'ST' },
          { name: 'OBC', value: 'OBC' }
        ]
        ,entity:"nonphysical"
      }
    }
  };
  public entityConfig: QueryBuilderConfig = {
    entities: {
      physical: { name: 'Physical Attributes' },
      nonphysical: { name: 'Nonphysical Attributes' }
    },
    fields: {
      age: { name: 'Age', type: 'number', entity: 'physical' },
      gender: {
        name: 'Gender',
        entity: 'physical',
        type: 'category',
        options: [
          { name: 'Male', value: 'm' },
          { name: 'Female', value: 'f' }
        ]
      },
      name: { name: 'Name', type: 'string', entity: 'nonphysical' },
      notes: { name: 'Notes', type: 'textarea', operators: ['=', '!='], entity: 'nonphysical' },
      educated: { name: 'College Degree?', type: 'boolean', entity: 'nonphysical' },
      birthday: {
        name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date()), entity: 'nonphysical'
      },
      school: { name: 'School', type: 'string', nullable: true, entity: 'nonphysical' },
      occupation: {
        name: 'Occupation',
        entity: 'nonphysical',
        type: 'category',
        options: [
          { name: 'Student', value: 'student' },
          { name: 'Teacher', value: 'teacher' },
          { name: 'Unemployed', value: 'unemployed' },
          { name: 'Scientist', value: 'scientist' }
        ]
      }
    }
  };
  public currentConfig: QueryBuilderConfig;
  public allowRuleset: boolean = true;
  public allowCollapse: boolean;
  public persistValueOnFieldChange: boolean = false;
  errorMessage:string="Rule Failed";
  successMessage:string="Rule Passed";
  ruleName:string="Test Rule";
  constructor(
    private httpClient: HttpClient
    // private formBuilder: FormBuilder
  ) {
    // this.queryCtrl = this.formBuilder.control(this.query);
    // this.currentConfig = this.config;
  }
  ngAfterViewChecked()
  {  
    console.log($(".disable-mandetoryRule"));
    var s=$(".disable-mandetoryRule").parent().parent().find('input').prop('disabled', true);
    //.css( "background-color", "red" );
    var s=$(".disable-mandetoryRule").parent().parent().find('select').prop('disabled', true);
  }
  convertToMicrosoftRuleBuilderQuery() {
    console.log(this.query);
    var output =this.convertRule(this.query)
    console.log(output);
    let rule: string = "";
    rule = rule + this.buildRuleStringForRuleSetType(this.query, true);
    console.log(rule);
    this.testRuleExpression(rule);
  }

  buildRuleStringForRuleSetType(ruleSet: RuleSet, isFirst: boolean = false): string {
    let ruleString: string = "";
    ruleSet.rules.forEach((rule: RuleSet | Rule, index: number) => {
      if ((<RuleSet>rule).condition) {
        let ruleSetLocal = <RuleSet>rule;
        console.log(ruleSetLocal);
        ruleString = ruleString + " " + ruleSetLocal.condition.toUpperCase() + " ";
        ruleString = ruleString + " ( ";
        ruleString = ruleString + this.buildRuleStringForRuleSetType(ruleSetLocal, false);
        ruleString = ruleString + " ) ";
      }
      else {
        console.log((typeof (<Rule>rule).value), (<Rule>rule).value);
        ruleString = ruleString + this.buildRuleStringForRuleType(<Rule>rule, (index == 0), (index == ruleSet.rules.length));
      }
    });
    return ruleString;
  }

  buildRuleStringForRuleType(rule: Rule, isFirst: boolean = false, isLast: boolean = false): string {
    let rl: string = "";
    if (isFirst != true)
      rl = rl + " AND ";

    //rl = rl + "( ";
    // rl = rl + rule.entity + "." + rule.field + " " + rule.operator + " " + rule.value;
    //rl = rl + " )";
    rl = rl + "( ";
    rl = rl + this.buildRuleTypeWiseRule(rule);
    rl = rl + " )";
    return rl;
  }

  buildRuleTypeWiseRule(rule: Rule): string {
    switch (rule.operator) {
      //Ask Akshya Sir what to do for contains
      case "=":
        return this.getRuleForEqualto(rule);
        break;
      case "contains":
        return this.getRuleForContains(rule);
        break;
      case "like":
        return this.getRuleForLike(rule);
        break;
      case "not in":
        return this.getRuleForNotIn(rule);
        break;
      default:
        return this.getDefaultRule(rule);
        break;
    }

  }
  getRuleForEqualto(rule: Rule): string {
    return rule.entity + "." + rule.field + " == " + " " + this.getRuleValue(rule);
  }
  getRuleForContains(rule: Rule): string {
    //return rule.entity + "." + rule.field + " like " + " " + "\"%%%"+rule.value+"%%%\"";
    return rule.entity + "." + rule.field + ".Contains(" + "\"" + rule.value + "\")";
  }
  getRuleForLike(rule: Rule): string {
    //return rule.entity + "." + rule.field + " like " + " " + "\"%%%"+rule.value+"%%%\"";
    return rule.entity + "." + rule.field + ".Contains(" + "\"" + rule.value + "\")";
  }
  getRuleForNotIn(rule: Rule): string {
    return "not (" + rule.entity + "." + rule.field + " in " + this.getRuleValue(rule);
  }
  getDefaultRule(rule: Rule): string {
    return rule.entity + "." + rule.field + " " + rule.operator + " " + this.getRuleValue(rule);
  }

  getRuleValue(rule: Rule): any {
    switch (typeof rule.value) {
      case "number":
        return rule.value;
        break;
      case "string":
        return "\"" + rule.value + "\"";
        break;
      case "boolean":
        return rule.value;
        break;
      case "object":
        return this.getCommaSeparatedString(<string[]>rule.value);
        break;
      default:
        return rule.value;
    }
  }
  getCommaSeparatedString(values: string[]) {
    let rl: string = "(";
    values.forEach((val: string, index: number) => {
      if (index != 0)
        rl = rl + ",";

      rl = rl + "\"" + val + "\"";
    });
    rl = rl + ")"
    return rl;
  }
  testRuleExpression(expression: string) {
    this.httpClient.post('http://localhost:51475/api/Document/TestRuleEngine', { RuleExpression: expression,ErrorMessage:this.errorMessage,SuccessMessage:this.successMessage,RuleName:this.ruleName }).subscribe((result) => {
      console.log(result);
      alert(result);
    });
  }
  remove(event)
  {
    console.log(event);
  }
  convertRule(input) {
    /** Settings **/
    var defaultCondition = 'AND';

    /** Private Functions **/
    var escapeRegExp = (str)=> {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    };

    var mongoOperators = {
        equal: '=',
        not_equal: '!=',
        less: '<',
        less_or_equal: '<=',
        greater: '>',
        greater_or_equal: '>=',
    };

    var mongoOperatorsFns = {

        equal: (v)=> {
            if(typeof v[1] == 'string'){
              v[1] = "'" + v[1] + "'";
            }

            var getValue = parseFloat(v[1]);

                  if(!isNaN(getValue)){
                      if(typeof getValue == 'number'){
                          v[1] = getValue;
                      }
                  }

            return 'this.'+ v[0] + " == " + v[1];
        },
        not_equal: (v)=> {

            if(typeof v[1] == 'string'){
              v[1] = "'" + v[1] + "'";
            }

            var getValue = parseFloat(v[1]);

                  if(!isNaN(getValue)){
                      if(typeof getValue == 'number'){
                          v[1] = getValue;
                      }
                  }

            return 'this.'+ v[0] + " != " + v[1];
        },
        less: (v)=> {
            var getValue = parseFloat(v[1]);

            if (typeof getValue == 'number') {
                v[1] = parseFloat(getValue.toString());
            }

            return 'this.'+ v[0] + " < " + v[1];
        },
        less_or_equal: (v)=> {
            var getValue = parseFloat(v[1]);

            if (typeof getValue == 'number') {
                v[1] = parseFloat(getValue.toString());
            }

            return 'this.'+ v[0] + " <= " + v[1];
        },
        greater:(v)=> {

            var getValue = parseFloat(v[1]);

            if (typeof getValue == 'number') {
                v[1] = parseFloat(getValue.toString());
            }

            return 'this.'+ v[0] + " > " + v[1];
        },
        greater_or_equal: (v)=> {

            let getValue:any = parseFloat(v[1]);

            if (typeof getValue == 'number') {
                v[1] = parseFloat(getValue.toString());
            }

            return 'this.'+ v[0] + " >= " + v[1];
        },
        contains: (v)=> {
            if(typeof v[1] == 'string'){
              v[1] = "'" + v[1] + "'";
            }

            var getValue = parseFloat(v[1]);

            if(!isNaN(getValue)){
                if(typeof getValue == 'number'){
                    v[1] = getValue;
                }
            }

            return 'this.'+ v[0] + ".indexOf(" + v[1] + ") > -1";
        },
        not_contains: (v)=> {

            if(typeof v[1] == 'string'){
              v[1] = "'" + v[1] + "'";
            }

            var getValue = parseFloat(v[1]);

            if(!isNaN(getValue)){
                if(typeof getValue == 'number'){
                    v[1] = getValue;
                }
            }

            return 'this.'+ v[0] + ".indexOf(" + v[1] + ") === -1";
        }
    }

    var output = [];

    if (!input) {
        return null;
    }

    var self = this;

    return (function parse(group) {

        if (!group.condition) {
            group.condition = defaultCondition;
        }

        if (['AND', 'OR'].indexOf(group.condition.toUpperCase()) === -1) {
            throw new Error('Unable to build rule with condition ' + group.condition);
        }

        if (!group.rules) {
            return {};
        }

        var parts = [];

        group.rules.forEach(function(rule) {
            if (rule.rules && rule.rules.length > 0) {
                parts.push(parse(rule));
            } else {
                var expFunction = mongoOperatorsFns[Object.keys(mongoOperators).find(s=>mongoOperators[s]==rule.operator)];

        var ruleExpression = {};

                if (expFunction === undefined) {
                    throw new Error('Unknown rule operation for operator ' + rule.operator);
                }

        ruleExpression = expFunction.call(self, [rule.id, rule.value]);

                parts.push(ruleExpression);
            }
        });

        var groupExpression = {};

    var output = '';

    for(var i=0; i < parts.length; i++) {
      if(typeof parts[i+1] != 'undefined') {
        output += parts[i] + (group.condition.toLowerCase() == 'and' ? ' && ' : ' || ');
      } else {
        output += parts[i];
      }
    }

    output = '(' + output + ')';

        return (output);

    })(input)
  }
}
