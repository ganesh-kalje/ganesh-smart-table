import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from '../../../ng2-smart-table/lib/data-source/local/local.data-source';
import {GridDataService} from './grid-data-service';
import {GridHelperService} from './grid-helper.service';
import {ExcelService} from "./excel-service";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    source: LocalDataSource; // add a property to the component
    settings = {};
    selectedData = [];

    constructor(private gridDataService: GridDataService,
                private gridHelperService: GridHelperService,
                private excelService: ExcelService) {

    }

    ngOnInit() {
        this.settings["selectMode"] = "multi";
        this.settings["columns"] = this.gridHelperService.getColumnsInfo();
        this.settings["add"] = this.gridHelperService.getCreateSetting();
        this.settings["edit"] = this.gridHelperService.getEditSetting();
        this.settings["delete"] = this.gridHelperService.getDeleteSetting();

        this.source = new LocalDataSource();
        this.gridDataService.getData().subscribe((data) =>  {
            this.source.load(data["data"]);
        });
    }

    onCreateConfirm(event) {
        if (!this.gridHelperService.validateData(event.newData)) {
            window.alert("Username and email are required fields");
            event.confirm.reject();
        } else {
            //Record is valid then save in database.
            /*this.gridDataService.saveNewRecord(event.newData).subscribe((data) =>  {
                event.confirm.resolve();
            });*/

            event.confirm.resolve();
        }
    }

    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            /*this.gridDataService.deleteRecord(event.data.id).subscribe((data) =>  {
                event.confirm.resolve();
            });*/

            console.log(event.data.id);
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    onSaveConfirm(event) {
        //validate data and then save
        if (window.confirm('Are you sure you want to save?')) {
            /*this.gridDataService.saveRecord(event.newData).subscribe((data) =>  {
                event.confirm.resolve(event.newData);
            });*/
            event.confirm.resolve(event.newData);
        } else {
            event.confirm.reject();
        }
    }

    userRowSelect(event) {
        this.selectedData = event.selected;
    }

    exportExcel() {
        if(this.selectedData.length == 0) {
            window.alert("Please select record to export");
            return false;
        }
        this.excelService.exportAsExcelFile(this.selectedData, "myFile");
    }

}
