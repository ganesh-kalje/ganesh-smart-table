import { Injectable } from '@angular/core';
import {CustomRenderComponent} from "./custom-render.component";

@Injectable()
export class GridHelperService {


    public getColumnsInfo() {
        return {
            id: {
                title: 'ID'
            },
            name: {
                title: 'Full Name',
            },
            username: {
                title: 'User Name',
            },
            email: {
                title: 'Email',
            },
            address : {
                title: 'Address',
                type: "custom",
                renderComponent: CustomRenderComponent
            }
        };
    }

    public validateData(userData) {
        if(userData["email"] == "" || userData["address"] == "") {
            return false;
        }
        return true;
    }

    public getCreateSetting() {
        return {
            confirmCreate: true,
            addButtonContent: '<img src="assets/img/add.svg" class="img-class"></img>',
            createButtonContent : '<img src="assets/img/save.svg" class="img-class"></img>',
            cancelButtonContent : '<img src="assets/img/close.svg" class="img-class"></img>'
        };
    }

    public getEditSetting() {
        return {
            confirmSave: true,
            editButtonContent: '<img src="assets/img/edit.svg" class="img-class"></img>',
            saveButtonContent : '<img src="assets/img/save.svg" class="img-class"></img>',
            cancelButtonContent : '<img src="assets/img/close.svg" class="img-class"></img>'
        };
    }

    public getDeleteSetting() {
        return {
            confirmDelete: true,
            deleteButtonContent: '<img src="assets/img/cancel.svg" class="img-class"></img>'
        };
    }

}