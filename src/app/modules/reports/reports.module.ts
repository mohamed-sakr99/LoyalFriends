import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { TotalReportsComponent } from './total-reports/total-reports.component';
import { PartialReportsComponent } from './partial-reports/partial-reports.component';


@NgModule({
  declarations: [
    ReportsComponent,
    TotalReportsComponent,
    PartialReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
