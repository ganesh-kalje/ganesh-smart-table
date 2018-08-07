import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { routes } from './home.routes';

import { HomeComponent } from './home.component';
import {Ng2SmartTableModule} from "../../../ng2-smart-table/ng2-smart-table.module";
import {GridDataService} from "./grid-data-service";
import {GridHelperService} from "./grid-helper.service";
import {CustomRenderComponent} from "./custom-render.component";
import {ExcelService} from "./excel-service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule
  ],
    entryComponents: [
      CustomRenderComponent,
       ],
  declarations: [
    HomeComponent,
      CustomRenderComponent

  ],
  providers: [GridDataService, GridHelperService, ExcelService],

})
export class HomeModule { }
