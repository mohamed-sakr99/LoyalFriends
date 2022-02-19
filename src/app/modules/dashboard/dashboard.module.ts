import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditDropDownsMenuComponent } from './edit-drop-downs-menu/edit-drop-downs-menu.component';
import { MessageService } from 'primeng/api';
import { AddToDropDownMenuComponent } from './add-to-drop-down-menu/add-to-drop-down-menu.component';
import { ListOfDropDownMenuComponent } from './list-of-drop-down-menu/list-of-drop-down-menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    EditDropDownsMenuComponent,
    AddToDropDownMenuComponent,
    ListOfDropDownMenuComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  providers: [MessageService],
})
export class DashboardModule {}
