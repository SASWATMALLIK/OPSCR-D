import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
    selector: 'app-demo-formly-preview',
    templateUrl: './demo-formly-preview.component.html',
})
export class DemoFormlyPreviewComponent implements OnInit, OnChanges {

    //@Output() previewClickedEvent = new EventEmitter<string>();

    // addNewItem(value: string) {
    //   this.newItemEvent.emit(value);
    // }

    @Input() itemToPreview: any = {};
    requisitionForm: any = { fields: [] };
    alphabet = 'abcdefghijklmnopqrstuvwxyz';

    /**
     *
     */
    constructor() {

    }

    ngOnInit() {
        //alert();
    }

    transformItemToPreview(formPreviewModel: any) {
        let requisitionFormfields: any[] = [];
        if (formPreviewModel.fields && formPreviewModel.fields.length) {
            requisitionFormfields = [...formPreviewModel.fields];
        }

        //console.log(requisitionFormfields);
        // this.requisitionForm.fields = requisitionFormfields.filter(function(p) {
        //     return p.fieldGroup && p.fieldGroup.length;
        //   });
        this.requisitionForm.fields = requisitionFormfields.filter(p =>
            p.fieldGroup && p.fieldGroup.length
        );
    }

    ngOnChanges({ itemToPreview }: any) {
        console.log(itemToPreview.currentValue);
        this.transformItemToPreview(itemToPreview.currentValue)
    }
}