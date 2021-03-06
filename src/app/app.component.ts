import { Component } from '@angular/core';
// import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill-v2';
// import { ImageResize } from 'quill-image-resize-module';
import 'quill-emoji/dist/quill-emoji.js';

import Quill from 'quill'
// import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';
// import { ImageDrop } from 'quill-image-drop-module';
import QuillBetterTable from "quill-better-table";
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { SERVER_DATA } from './server.json';
import { StateModel } from './state.model';
import { SameAsAddressModel } from './same-as-address.model';

// Quill.register('modules/blotFormatter', BlotFormatter);
// Quill.register('modules/imageDrop', ImageDrop);

// Quill.register('modules/imageResize', ImageResize);
Quill.register(
  {
    "modules/better-table": QuillBetterTable
  },
  true
);
interface Quill {
  getModule(moduleName: string);
}

interface BetterTableModule {
  insertTable(rows: number, columns: number): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blured = false
  focused = false
  modules = {}
  requisitionFormPreviewModel : any = {};
  constructor(private dynamicFormBuilder:RxDynamicFormBuilder) {
    this.modules = {
      table: false, 
      'better-table': {
        operationMenu: {
          items: {
            unmergeCells: {
              text: 'Another unmerge cells name'
            }
          }
        }
      },
      keyboard: {
        bindings: QuillBetterTable.keyboardBindings
      },
      // imageResize: {
      //   // See optional "config" below
      // },
      // imageDrop: true,
      // 'emoji-shortname': true,
      // 'emoji-textarea': false,
      // 'emoji-toolbar': true,
      // blotFormatter: {
      //   // empty object for default behaviour.
      // },
      'toolbar': {
        container: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          ['link', 'image', 'video'],                         // link and image, video
          ['emoji'],
        ],
        // handlers: { 'emoji': function () { } },

      }
    };
  }

  public quill: Quill;
  public defaultHtml={html:"<p><br></p><div class=\"quill-better-table-wrapper\"><table class=\"quill-better-table\" style=\"width: 300px;\"><colgroup><col width=\"100\"><col width=\"100\"><col width=\"100\"></colgroup><tbody><tr data-row=\"row-zztn\"><td data-row=\"row-zztn\" rowspan=\"1\" colspan=\"1\"><div data-row=\"row-zztn\" data-cell=\"cell-pi7b\" data-rowspan=\"1\" data-colspan=\"1\"> 5 </div></td><td data-row=\"row-zztn\" rowspan=\"1\" colspan=\"1\"><div data-row=\"row-zztn\" data-cell=\"cell-b05x\" data-rowspan=\"1\" data-colspan=\"1\"><br></div></td><td data-row=\"row-zztn\" rowspan=\"1\" colspan=\"1\"><div data-row=\"row-zztn\" data-cell=\"cell-v1e9\" data-rowspan=\"1\" data-colspan=\"1\"><br></div></td></tr><tr data-row=\"row-e7si\"><td data-row=\"row-e7si\" rowspan=\"1\" colspan=\"1\"><div data-row=\"row-e7si\" data-cell=\"cell-p3l5\" data-rowspan=\"1\" data-colspan=\"1\"><br></div></td><td data-row=\"row-e7si\" rowspan=\"1\" colspan=\"1\"><div data-row=\"row-e7si\" data-cell=\"cell-h7xl\" data-rowspan=\"1\" data-colspan=\"1\"><br></div></td><td data-row=\"row-e7si\" rowspan=\"1\" colspan=\"1\"><div data-row=\"row-e7si\" data-cell=\"cell-g5h3\" data-rowspan=\"1\" data-colspan=\"1\"><br></div></td></tr><tr data-row=\"row-kcan\"><td data-row=\"row-kcan\" rowspan=\"1\" colspan=\"1\"><div data-row=\"row-kcan\" data-cell=\"cell-rl6d\" data-rowspan=\"1\" data-colspan=\"1\"><br></div></td><td data-row=\"row-kcan\" rowspan=\"1\" colspan=\"1\"><div data-row=\"row-kcan\" data-cell=\"cell-rxh5\" data-rowspan=\"1\" data-colspan=\"1\"><br></div></td><td data-row=\"row-kcan\" rowspan=\"1\" colspan=\"1\"><div data-row=\"row-kcan\" data-cell=\"cell-jdrl\" data-rowspan=\"1\" data-colspan=\"1\"><br></div></td></tr></tbody></table></div><p><span style=\"color: rgb(0, 0, 0);\">Online applications are invited from the prospective candidates through the proforma application to be made available on the Website of the Commission ($OFFICELINK$). </span><strong style=\"color: rgb(0, 0, 0);\">The link for registration /reregistration and payment of examination fee shall be available from ??????????????????. to ................ (Note: ...................... is the last date for submission of Registered Online Application</strong><span style=\"color: rgb(0, 0, 0);\">) for recruitment to </span><strong style=\"color: rgb(0, 0, 0);\">$NO_OF_POSTS$</strong><span style=\"color: rgb(0, 0, 0);\"> (</span><strong style=\"color: rgb(0, 0, 0);\">$NO_OF_POSTS_IN_WORDS$</strong><span style=\"color: rgb(0, 0, 0);\">) posts of </span><strong style=\"color: rgb(0, 0, 0);\">$POST_NAME$</strong><span style=\"color: rgb(0, 0, 0);\"> Service under Department of </span><strong style=\"color: rgb(0, 0, 0);\">$DEPARTMENT_NAME$</strong><span style=\"color: rgb(0, 0, 0);\">, in the pre-revised scale of pay of Rs.9,300-34,800/- with Grade pay of Rs.4600/- (PB-2) or Level 10 of the Pay Matrix Revised, as per ORSP Rules, 2017, with usual Dearness and other Allowances as may be sanctioned by the Government of Odisha from time to time. The posts are temporary and likely to continue.</span></p>"};
  private get tableModule(): BetterTableModule {
    return this.quill.getModule("better-table");
  }

  public editorCreated(event: Quill): void {
    this.quill = event;
    // Example on how to add new table to editor
    //this.addNewtable();
  }

  public addNewtable(): void {
    this.tableModule.insertTable(3, 3);
  }

  onPreviewRequisitionForm(val: any){
    console.log(val);
    this.requisitionFormPreviewModel = val;
  }


  title = 'richtext-editor';
  formats=["html","object"];
  content={
    "ops": [
      {
        "insert": {
          "image": "data:image/jpeg;base64,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"
        }
      },
      {
        "attributes": {
          "align": "center"
        },
        "insert": "\n"
      },
      {
        "attributes": {
          "table-col": {
            "width": "100"
          }
        },
        "insert": "\n\n\n\n"
      },
      {
        "attributes": {
          "bold": true
        },
        "insert": "Name"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-pxl3",
            "cell": "cell-5e8k"
          },
          "row": "row-pxl3",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "attributes": {
          "bold": true
        },
        "insert": "Post"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-pxl3",
            "cell": "cell-v61e"
          },
          "row": "row-pxl3",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "attributes": {
          "bold": true
        },
        "insert": "Head"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-pxl3",
            "cell": "cell-o8xu"
          },
          "row": "row-pxl3",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "Thhh"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-pxl3",
            "cell": "cell-cr16"
          },
          "row": "row-pxl3",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "2"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-fsjo",
            "cell": "cell-fnpe"
          },
          "row": "row-fsjo",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "3"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-fsjo",
            "cell": "cell-rosm"
          },
          "row": "row-fsjo",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "1"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-fsjo",
            "cell": "cell-oxvd"
          },
          "row": "row-fsjo",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "2"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-fsjo",
            "cell": "cell-5g6h"
          },
          "row": "row-fsjo",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "11"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-5551",
            "cell": "cell-jj1s"
          },
          "row": "row-5551",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "1111"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-5551",
            "cell": "cell-4ctu"
          },
          "row": "row-5551",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "111"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-5551",
            "cell": "cell-veao"
          },
          "row": "row-5551",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "1111"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-5551",
            "cell": "cell-gpl4"
          },
          "row": "row-5551",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "2222"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-9cow",
            "cell": "cell-v6ik"
          },
          "row": "row-9cow",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "333"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-9cow",
            "cell": "cell-lfxu"
          },
          "row": "row-9cow",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "444"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-9cow",
            "cell": "cell-9mmj"
          },
          "row": "row-9cow",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      },
      {
        "insert": "5555"
      },
      {
        "attributes": {
          "table-cell-line": {
            "rowspan": "1",
            "colspan": "1",
            "row": "row-9cow",
            "cell": "cell-iybu"
          },
          "row": "row-9cow",
          "rowspan": "1",
          "colspan": "1"
        },
        "insert": "\n"
      }, { "attributes": { "align": "center" }, "insert": "\n" },
      {
        "insert": "\nSaswat Mallik\nFor Post Name "
      },
      {
        "attributes": {
          "bold": true
        },
        "insert": "$PostName$"
      },
      {
        "insert": " , the minimum age of applicant is "
      },
      {
        "attributes": {
          "bold": true
        },
        "insert": "$MinAge$"
      },
      {
        "insert": " and Maximum age of Applicant is "
      },
      {
        "attributes": {
          "bold": true
        },
        "insert": " $MaxAge$"
      },
      {
        "insert": " .\n"
      }
    ]
  };
  quillContent=null;
  testContent="";
  serverData:any[] = SERVER_DATA;;
  uiBindings:string[] = ["firstName","country","state","permanentAddress","sameAsPermanent","correspondenceAddress"];
dynamicFormConfiguration:DynamicFormConfiguration;
dynamicForm:DynamicFormBuildConfig;
ngOnInit() {
  ReactiveFormConfig.set({
    validationMessage:{
      required:'This Field is required'
    }
  })
  this.dynamicFormConfiguration = {
    controlConfigModels:[{modelName:"state",model:StateModel},{modelName:"sameAsAddress",model:SameAsAddressModel}]
  }
    this.dynamicForm = this.dynamicFormBuilder.formGroup(this.serverData,this.dynamicFormConfiguration)  
}
  onEditorChanged(event)
  {
    console.log(event);
    // if(event.source=="user")
    // {
    //   var cnfm=confirm("let's undo");
    //   if(cnfm)
    //   {
    //     event.editor.history.undo();
    //   }
    // }
    var localContent=event.html;
    localContent=localContent.replaceAll("<table class=\"quill-better-table\"","<table align=\"center\" class=\"quill-better-table\"");
    this.quillContent=localContent;
    
  }
  replaceContent()
  {
    var con=Object.assign({},this.content);
    con.ops.forEach((s:any)=>{
        if(s.insert.includes("$PostName$"))
        {
          s.insert= s.insert.replace("$PostName$","Horticulture");
        }
        if(s.insert.includes("$MinAge$"))
        {
          s.insert= s.insert.replace("$MinAge$","21");
        }
        if(s.insert.includes("$MaxAge$"))
        {
          s.insert= s.insert.replace("$MaxAge$","35");
        }
    });
    this.content=Object.assign({},con);
  }
  convertToHtml(delta:any)
  {
    let converter = new QuillDeltaToHtmlConverter(delta.ops);
    let html = converter.convert();
    console.log(html);
  }
  convertToPdf()
  {
    console.log("Convert Clicked");
  }
  btnClick()
  {
    console.log(this.dynamicForm.formGroup);
  }
}


//For Post Name  $PostName$ , the minimum age of applicant is $MinAge$ and Maximum age of Applicant is   $MaxAge$ .
//{ "ops": [ { "insert": "For Post Name " }, { "attributes": { "bold": true }, "insert": "$PostName$" }, { "insert": " , the minimum age of applicant is $MinAge$ and Maximum age of Applicant is " }, { "attributes": { "bold": true }, "insert": " $MaxAge$" }, { "insert": " .\n" } ] }
