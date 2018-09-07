import { Component } from '@angular/core';
import { ModalController, NavController, AlertController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private todoService: TodoServiceProvider, public alertCtrl: AlertController) {
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

  openBasicModal(todo, item) {
    this.myParam = todo;
    let myModal = this.modalCtrl.create(ListPage, { 'myParam': this.myParam, 'item': item });
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }
  presentConfirm(i) {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Do you want delete this list?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteTodo(i)
          }
        }
      ]
    });
    alert.present();
  }
}
