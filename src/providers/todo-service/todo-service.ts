import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {
  public todos = [];
  constructor(public http: HttpClient) {
    console.log('Hello TodoServiceProvider Provider');
  }
  getTodo() {
    return (this.todos);
  }

  addTodo(todoText) {
    this.todos.push(todoText);
  }

}
