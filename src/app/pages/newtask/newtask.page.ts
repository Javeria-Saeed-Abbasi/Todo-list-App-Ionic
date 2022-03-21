import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.page.html',
  styleUrls: ['./newtask.page.scss'],
})
export class NewtaskPage implements OnInit {
  taskList
  categories = ['work' , 'personal' , 'business' , 'planned' , 'shopping']
 taskCategory  
 taskObject 
constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.taskObject);
  }
  selectedCategory(index){
    this.taskCategory = this.categories[index];
  }
  addNewTask(){
    this.taskObject = ({
      itemCategory: this.taskCategory,
    }), 
    this.dismiss();
    console.log(this.taskList);
  }

}
