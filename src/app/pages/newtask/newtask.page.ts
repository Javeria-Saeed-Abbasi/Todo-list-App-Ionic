import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import  { Validators, FormControl, FormBuilder, FormArray, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.page.html',
  styleUrls: ['./newtask.page.scss'],
})
export class NewtaskPage implements OnInit {

categories = ['Work' , 'Personal' , 'Business' , 'Planned' , 'Shopping']
 taskCategory  
 taskObject 
constructor(public modalCtrl:ModalController) {

 }

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
    // console.log(this.taskList);
  }

  

}
