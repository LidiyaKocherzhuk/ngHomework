import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import {TodosComponent} from './todos.components/todos/todos.component';
import {TodosService} from './services';
import { TodoComponent } from './todos.components/todo/todo.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  providers: [TodosService]
})
export class TodosModule { }
