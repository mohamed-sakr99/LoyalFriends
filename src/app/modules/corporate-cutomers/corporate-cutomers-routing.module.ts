import { CorpCustomerListComponent } from './corp-customer-list/corp-customer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCorpCutomerComponent } from './add-corp-cutomer/add-corp-cutomer.component';

const routes: Routes = [
  {
    path: 'add-corp-cust',
    component: AddCorpCutomerComponent,
  },
  {
    path: 'corp-cust-list',
    component: CorpCustomerListComponent,
  },
  {
    path: '',
    redirectTo: 'add-corp-cust',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorporateCutomersRoutingModule {}
