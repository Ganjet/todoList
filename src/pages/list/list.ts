import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  myParam: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, params: NavParams, private todoService: TodoServiceProvider) {
    this.myParam = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  saveNewList(item) {
    this.todoService.todos[this.myParam].newTodo = item;

  }
}
