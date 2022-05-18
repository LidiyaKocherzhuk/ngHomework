import {Component, Input, OnInit} from '@angular/core';

import {ITodo} from '../../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodo;
  completed: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.completed = this.todo.completed;
  }

}
