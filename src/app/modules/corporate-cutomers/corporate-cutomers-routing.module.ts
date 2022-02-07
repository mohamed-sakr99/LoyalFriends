import { CorpCustInfoComponent } from './corp-cust-info/corp-cust-info.component';
import { CorpCustomerListComponent } from './corp-customer-list/corp-customer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCorpCutomerComponent } from './add-corp-cutomer/add-corp-cutomer.component';
import { EditCorpCustComponent } from './edit-corp-cust/edit-corp-cust.component';

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
    path: 'edit/:id',
    component: EditCorpCustComponent,
  },
  {
    path: 'info/:id',
    component: CorpCustInfoComponent,
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
