import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.page.html',
  styleUrls: ['./newlist.page.scss'],
})
export class NewlistPage implements OnInit {
  
 categories = ['Work' , 'Personal' , 'Business' , 'Planned' , 'Shopping']
  taskList
  taskObject
  taskCategory
  constructor(public modalCtrl:ModalController) { }
  

  ngOnInit() {
  }
  async dismiss(){
    await this.modalCtrl.dismiss(this.taskObject);
  }
  selectedCategory(index){
    this.taskCategory = this.categories[index];
  }
  addNew(){
    this.taskObject = ({
      itemList: this.taskList,
      itemCategory: this.taskCategory,
    }),
    this.dismiss();
  }
}
