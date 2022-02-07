import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateCutomersRoutingModule } from './corporate-cutomers-routing.module';
import { AddCorpCutomerComponent } from './add-corp-cutomer/add-corp-cutomer.component';
import { CorpCustomerListComponent } from './corp-customer-list/corp-customer-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CorpCustInfoComponent } from './corp-cust-info/corp-cust-info.component';
import { EditCorpCustComponent } from './edit-corp-cust/edit-corp-cust.component';

@NgModule({
  declarations: [AddCorpCutomerComponent, CorpCustomerListComponent, CorpCustInfoComponent, EditCorpCustComponent],
  imports: [CommonModule, CorporateCutomersRoutingModule, SharedModule],
})
export class CorporateCutomersModule {}
