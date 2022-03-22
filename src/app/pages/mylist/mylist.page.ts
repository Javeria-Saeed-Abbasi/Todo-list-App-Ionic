import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewlistPage } from '../newlist/newlist.page';
@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.page.html',
  styleUrls: ['./mylist.page.scss'],
})
export class MylistPage implements OnInit {
  todoList = []

  constructor(public modalCtrl:ModalController) { }
  async addNewList(){
    const modal = await this.modalCtrl.create({
      component: NewlistPage
    })
    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })
    return await modal.present();
  }
  list_del(index){
    this.todoList.splice(index,1);

  }
  ngOnInit() {
  }

}
