import { PartialReportsComponent } from './partial-reports/partial-reports.component';
import { TotalReportsComponent } from './total-reports/total-reports.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'total-reports',
    component: TotalReportsComponent,
  },
  {
    path: 'part-reports',
    component: PartialReportsComponent,
  },
  {
    path: '',
    redirectTo: 'total-reports',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
