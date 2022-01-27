import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateCutomersRoutingModule } from './corporate-cutomers-routing.module';
import { AddCorpCutomerComponent } from './add-corp-cutomer/add-corp-cutomer.component';
import { CorpCustomerListComponent } from './corp-customer-list/corp-customer-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AddCorpCutomerComponent, CorpCustomerListComponent],
  imports: [CommonModule, CorporateCutomersRoutingModule, SharedModule],
})
export class CorporateCutomersModule {}
