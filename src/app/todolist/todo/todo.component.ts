import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() item: ITodo;
  @Input() index: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChange = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemove = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeStatus() {
    this.onChange.emit(this.item);
  }

  removeTodo() {
    this.onRemove.emit(this.index);
  }
}
