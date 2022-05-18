import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {TodosService} from '../../services';
import {ITodo} from '../../models';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[];

  constructor(private todosService: TodosService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.todosService.getByUserId(id).subscribe(response => this.todos = response);
    })
  }

}
