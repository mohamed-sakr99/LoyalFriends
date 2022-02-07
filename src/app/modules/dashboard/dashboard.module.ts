import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditDropDownsMenuComponent } from './edit-drop-downs-menu/edit-drop-downs-menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    EditDropDownsMenuComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
