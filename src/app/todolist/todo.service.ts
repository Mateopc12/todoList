import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [];
  constructor() { }

  get todoList(){
    return this._todoList;
  }

  add(text: string) {
    this._todoList.push({text: text, done: false});
  }

  remove(index) {
    this._todoList.splice(index, 1);
  }

  complete(item: ITodo) {
    item.done = true;
  }

  showActive() {
    return this._todoList.filter(i => i.done === false);
  }

  showCompleted() {
    return this._todoList.filter(i => i.done === true);
  }

  totalItems() {
    return this._todoList.length;
  }
}
