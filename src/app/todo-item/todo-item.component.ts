import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/typings/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() data: Todo;

  constructor() { }

  ngOnInit() {
  }

}
