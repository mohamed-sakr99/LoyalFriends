import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdslDetailsRoutingModule } from './adsl-details-routing.module';
import { AddAdslCustomerComponent } from './add-adsl-customer/add-adsl-customer.component';
import { AdslCustomerListComponent } from './adsl-customer-list/adsl-customer-list.component';
import { AdslCustomerInfoComponent } from './adsl-customer-info/adsl-customer-info.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@NgModule({
  declarations: [
    AddAdslCustomerComponent,
    AdslCustomerListComponent,
    AdslCustomerInfoComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    AdslDetailsRoutingModule
  ]
})
export class AdslDetailsModule { }
