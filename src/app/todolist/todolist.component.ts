import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoListShowing: ITodo[];
  newTodo = '';
  activeResult = 0;

  constructor(private todoService: TodoService) {
    this.todoListShowing = this.todoService.todoList;
   }

  ngOnInit() {
  }

  onKey(event: KeyboardEvent) { // with type info
    if (event.key === 'Enter') {
      this.todoService.add(this.newTodo);
      this.newTodo = '';
      this.checkCounter();
    }
  }

  checkCounter() {
    this.activeResult = this.todoService.todoList.filter(i => i.done === false).length;
  }

  changeStatus(item: ITodo) {
    this.todoService.complete(item);
    this.checkCounter();
  }

  removeTodo(id: number) {
    this.todoService.remove(id);
    this.todoListShowing = this.todoService.filter();
    this.checkCounter();
  }

  filter(text: string) {
    this.todoListShowing = this.todoService.filter(text);
  }

  totalItems() {
    return this.todoService.totalItems();
  }

}
