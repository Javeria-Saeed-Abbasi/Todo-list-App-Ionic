import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NewlistPage } from '../newlist/newlist.page';
import {Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.page.html',
  styleUrls: ['./mylist.page.scss'],
})
export class MylistPage implements OnInit {
  todoList = []
  itemCategory;
  constructor(public modalCtrl:ModalController, private route: ActivatedRoute, private router: Router) { 
    // this.route.queryParams.subscribe(params => {
    //   console.log(params, "jav");
    //   this.itemCategory = params;
    //   if(params && params.special){
    //     this.todoList = JSON.parse(params.special);
    //     console.log(this.todoList)
    //   }
    // });
    this.itemCategory = history.state.itemCategory
    
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
  changeText(item){
    console.log (item);
    let navigationExtras: NavigationExtras=
    {
      queryParams:{
        special: item.itemList
      }
    };
    this.router.navigate(['/newlist'], {
      state : item
    });
  }
  ngOnInit() {
  }

}
