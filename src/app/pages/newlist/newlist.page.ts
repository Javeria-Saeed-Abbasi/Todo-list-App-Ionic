import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.page.html',
  styleUrls: ['./newlist.page.scss'],
})
export class NewlistPage implements OnInit {
  
 categories = ['Work' , 'Personal' , 'Business' , 'Planned' , 'Shopping']
  taskList
  itemList
  taskObject
  taskCategory
  constructor(public modalCtrl:ModalController, private route: ActivatedRoute, private router: Router) { 
    this.itemList = history.state.itemList
    console.log(this.itemList);
  }


  ngOnInit() {
  }
  async dismiss(){
    console.log(this.taskObject)
    await this.modalCtrl.dismiss(this.taskObject);
  }
  // selectedCategory(index){
  //   this.taskCategory = this.categories[index];
  // }
  addNew(){
    this.taskObject = ({
      itemList: this.taskList,
      // itemCategory: this.taskCategory,
    })
    this.dismiss();
  }
}
