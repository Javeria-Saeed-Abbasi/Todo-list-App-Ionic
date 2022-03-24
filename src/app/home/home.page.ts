import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import {Router, NavigationExtras } from '@angular/router';
import { NewtaskPage } from '../pages/newtask/newtask.page';
// import { time } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [];
  today: number = Date.now();
  constructor(public modalCtrl: ModalController, private router: Router) {}
  async addNewTask(){
    const modal = await this.modalCtrl.create({
      component: NewtaskPage
    });
    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data);
    });
    return await modal.present();
  }
  nextpage(item){
    console.log (item);
    const navigationExtras: NavigationExtras=
    {
      queryParams:{
        special: item.itemCategory
      }
    };
    this.router.navigate(['mylist'], {
      state : item,
    });
  }
//  delete(index){
//    this.todoList.splice(index,1);
//  }
greetings() {
  const myDate = new Date();
  const hour = myDate.getHours();
  // console.log(hour);
  if (hour <= 12) {
    return 'Good Morning';
  } else if ((hour > 12) && (hour <= 16)) {
  return 'Good Afternoon';
  } else if ((hour > 16) && (hour < 20)) {
  return 'Good Evening';
  } else {
  return 'Good Night';
  }
  }


}
