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
        path: 'editmenus',
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
