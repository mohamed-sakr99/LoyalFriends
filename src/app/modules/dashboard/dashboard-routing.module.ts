import { ListOfDropDownMenuComponent } from './list-of-drop-down-menu/list-of-drop-down-menu.component';
import { AddToDropDownMenuComponent } from './add-to-drop-down-menu/add-to-drop-down-menu.component';
import { DashboardComponent } from './dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditDropDownsMenuComponent } from './edit-drop-downs-menu/edit-drop-downs-menu.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'adduser',
        component: AddUserComponent,
      },
      {
        path: 'edituser/:id',
        component: EditUserComponent,
      },
      {
        path: 'userlist',
        component: ListUserComponent,
      },
      {
        path: 'addtomenu',
        component: AddToDropDownMenuComponent,
      },
      {
        path: 'menulist',
        component: ListOfDropDownMenuComponent,
      },
      {
        path: 'editmenus/:id',
        component: EditDropDownsMenuComponent,
      },
      {
        path: '',
        redirectTo: 'adduser',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
