import { FixedlineCutomerListComponent } from './fixedline-cutomer-list/fixedline-cutomer-list.component';
import { AdslCutomerListComponent } from './adsl-cutomer-list/adsl-cutomer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedlineAdslCutomerListComponent } from './fixedline-adsl-cutomer-list/fixedline-adsl-cutomer-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddCustomerComponent,
  },
  {
    path: 'adsl-cust-list',
    component: AdslCutomerListComponent,
  },
  {
    path: 'fixed-cust-list',
    component: FixedlineCutomerListComponent,
  },
  {
    path: 'adsl-fixed-cust-list',
    component: FixedlineAdslCutomerListComponent,
  },
  {
    path: '',
    redirectTo: 'add',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'add',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdslFixedCutomersRoutingModule {}
