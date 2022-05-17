import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./users/users.module').then(module => module.UsersModule)}
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
