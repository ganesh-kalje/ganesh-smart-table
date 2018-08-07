import { Component, Input, OnInit } from '@angular/core';
import {ViewCell} from "../../../ng2-smart-table/components/cell/cell-view-mode/view-cell";

//import { ViewCell } from '../../../../ng2-smart-table';

@Component({
    template: `
        <b>{{renderValue}}</b>
  `,
})
export class CustomRenderComponent implements ViewCell, OnInit {

    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }

}