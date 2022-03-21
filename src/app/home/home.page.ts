import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewtaskPage } from '../pages/newtask/newtask.page';
// import { time } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = []
  today : number = Date.now();
  constructor(public modalCtrl: ModalController) {}
async addTask(){
 const modal = await this.modalCtrl.create({
   component: NewtaskPage
 })
 modal.onDidDismiss().then(newTaskObj =>{
   console.log(newTaskObj.data);
   this.todoList.push(newTaskObj.data)
 })
 return await modal.present();
}
}
