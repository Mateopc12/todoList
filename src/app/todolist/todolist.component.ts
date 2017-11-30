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
    if (event.key === 'Enter' && this.newTodo.length > 0) {
      this.todoService.add(this.newTodo);
      this.newTodo = '';
      this.activeResult = this.todoService.todoList.filter(i => i.done === false).length;
    }
  }

  refreshView() {
    this.todoListShowing = this.todoService.filter();
    this.activeResult = this.todoService.todoList.filter(i => i.done === false).length;
  }



  changeAll() {
    this.todoService.completeAll();
    this.refreshView();
  }

  removeCompleted() {
    this.todoService.removeCompleted();
    this.refreshView();
  }

  changeStatus(item: ITodo) {
    this.todoService.complete(item);
    this.refreshView();
  }

  removeTodo(id: number) {
    this.todoService.remove(id);
    this.refreshView();
  }

  filter(text: string) {
    this.todoListShowing = this.todoService.filter(text);
  }

  totalItems() {
    return this.todoService.todoList.length;
  }

  completedItemsCount() {
    console.log(this.todoService.todoList.filter(i => i.done === true));
    return this.todoService.todoList.filter(i => i.done === true).length;
  }

}
