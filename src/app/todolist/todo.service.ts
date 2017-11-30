import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList: ITodo[] = [];
  showing = 'All';
  constructor() {
  }

  get todoList() {
    return this._todoList;
  }

  private nextId(): number {
    const idList: number[] = this._todoList.map(i => i.id);
    if (idList && idList.length > 0) {
      const currentMaxId = Math.max(...idList);
      return currentMaxId + 1;
    }

    return 1;
  }

  add(text: string) {
    this._todoList.push({ id: this.nextId(), text: text, done: false });
  }

  remove(id: number) {
    const index = this._todoList.findIndex(d => d.id === id);
    this._todoList.splice(index, 1);
  }

  complete(item: ITodo) {
    item.done = true;
  }

  filter(text?: string) {
    this.showing = text ? text : this.showing;
    switch (this.showing) {
      case 'Active':
        return this._todoList.filter(i => !i.done);
      case 'Completed':
        return this._todoList.filter(i => i.done);
      default:
      return this._todoList;
    }
  }

  completeAll() {
    this._todoList.map(function(obj) {
      obj.done = true;
      return obj;
    });
  }

  removeCompleted() {
    this._todoList = this._todoList.filter(i => !i.done);
  }

}
