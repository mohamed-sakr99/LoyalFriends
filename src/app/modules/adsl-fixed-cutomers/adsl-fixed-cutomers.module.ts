import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdslFixedCutomersRoutingModule } from './adsl-fixed-cutomers-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AdslCutomerListComponent } from './adsl-cutomer-list/adsl-cutomer-list.component';
import { FixedlineCutomerListComponent } from './fixedline-cutomer-list/fixedline-cutomer-list.component';
import { FixedlineAdslCutomerListComponent } from './fixedline-adsl-cutomer-list/fixedline-adsl-cutomer-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditCustomerDetailsComponent } from './edit-customer-details/edit-customer-details.component';

@NgModule({
  declarations: [
    AddCustomerComponent,
    AdslCutomerListComponent,
    FixedlineCutomerListComponent,
    FixedlineAdslCutomerListComponent,
    EditCustomerDetailsComponent,
  ],
  imports: [CommonModule, AdslFixedCutomersRoutingModule, SharedModule],
})
export class AdslFixedCutomersModule {}
