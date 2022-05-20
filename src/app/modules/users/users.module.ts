import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import {UserResolver, UsersGuard, UsersService, UsersResolver} from './services';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-detais/user-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UsersService,
    UsersResolver,
    UserResolver,
    UsersGuard
  ]
})
export class UsersModule { }
