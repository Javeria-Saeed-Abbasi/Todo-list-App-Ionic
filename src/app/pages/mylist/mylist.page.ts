import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NewlistPage } from '../newlist/newlist.page';
import {Router, NavigationExtras } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.page.html',
  styleUrls: ['./mylist.page.scss'],
})
export class MylistPage implements OnInit {
  todoList = [];
  itemCategory;
  itemList;
  title = true;
  previousText:any = document.getElementById("previoustext") as HTMLInputElement

  constructor(public modalCtrl: ModalController, private route: ActivatedRoute, private router: Router) {
    this.itemCategory = history.state.itemCategory
    
  }
  async addNewList(){
    const modal = await this.modalCtrl.create({
      component: NewlistPage,
      componentProps : {
        title: 'New List',
    }
    });
    modal.onDidDismiss().then(newTaskObj =>{
      this.todoList.push(newTaskObj.data);
    });
    console.log(this.todoList);

    return await modal.present();
  }
  listDel(index){
    this.todoList.splice(index,1);
  }

  //On update Change Text
  async changeText(item, index: number){
    const modal = await this.modalCtrl.create({
      component: NewlistPage,
      componentProps : {
        title: 'Update List',
        previousVal : item.itemList
    }
    } );
    this.previousText =  item.itemList;
    console.log(this.previousText);
    
    modal.onDidDismiss().then((newTaskObj:any) =>{
      this.todoList.map((res:any, i)=>{
        if(index == i){
          res.itemList = newTaskObj?.data?.itemList;
        }
        
      })
      
    });
    return await modal.present();
    // console.log (item);
    // console.log(index);
    // const navigationExtras: NavigationExtras=
    // {
    //   queryParams:{
    //     special: item.itemList
    //   },
    // };
    // this.router.navigate(['/newlist'], {
    //   state : item
    // });
  }
  
  ngOnInit() {

  }
}
