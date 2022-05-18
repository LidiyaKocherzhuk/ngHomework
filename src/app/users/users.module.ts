import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsComponent } from './users.components/user-details/user-details.component';
import {UsersComponent} from './users.components/users/users.component';
import {UsersService} from './services';
import { UserComponent } from './users.components/user/user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
