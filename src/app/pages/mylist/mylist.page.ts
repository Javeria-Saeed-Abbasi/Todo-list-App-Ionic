import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NewlistPage } from '../newlist/newlist.page';
@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.page.html',
  styleUrls: ['./mylist.page.scss'],
})
export class MylistPage implements OnInit {
  todoList = []
  itemCategory;
  constructor(public modalCtrl:ModalController, private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.itemCategory = params;
      if(params && params.special){
        this.todoList = JSON.parse(params.special);
        console.log(this.todoList)
      }
    });
  }
  async addNewList(){
    const modal = await this.modalCtrl.create({
      component: NewlistPage
    })
    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })
    console.log(this.todoList);
    return await modal.present();
  }
  list_del(index){
    this.todoList.splice(index,1);

  }
  ngOnInit() {
  }

}
