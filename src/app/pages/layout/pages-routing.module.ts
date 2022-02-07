import { ReportsModule } from './../../modules/reports/reports.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'reports',
        loadChildren: () =>
          import('../../modules/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: 'adsl-fixed',
        loadChildren: () =>
          import(
            '../../modules/adsl-fixed-cutomers/adsl-fixed-cutomers.module'
          ).then((m) => m.AdslFixedCutomersModule),
      },
      {
        path: 'corp-cust',
        loadChildren: () =>
          import(
            '../../modules/corporate-cutomers/corporate-cutomers.module'
          ).then((m) => m.CorporateCutomersModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: '',
        redirectTo: 'reports',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
