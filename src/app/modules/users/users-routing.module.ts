import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from './components/users/users.component';
import {UserResolver, UsersGuard, UsersResolver} from './services';
import {UserDetailsComponent} from './components/user-detais/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {usersData: UsersResolver},
    canActivate: [UsersGuard],
    canDeactivate: [UsersGuard],
    children: [
      {
        path: ':id', component: UserDetailsComponent, resolve: {userData: UserResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
