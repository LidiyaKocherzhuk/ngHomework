import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

let routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', loadChildren: () => import('./modules').then(model => model.UsersModule)},
  {path: 'posts', loadChildren: () => import('./modules').then(model => model.PostsModule)},
  {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(model => model.CommentsModule)}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
