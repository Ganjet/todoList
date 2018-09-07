import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newTodo = '';
  todos = [];
  todoObj: any;
  completed: boolean;
  myParam;
  count = 1;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private todoService: TodoServiceProvider) {
    this.todos = this.todoService.getTodo();
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false,
      id: this.count++
    }
    this.todoService.addTodo(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  openBasicModal(todo) {
    this.myParam = todo;
    console.log(this.myParam)
    let myModal = this.modalCtrl.create(ListPage, { 'myParam': this.myParam });
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }
}
