import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationExtras } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.page.html',
  styleUrls: ['./newlist.page.scss'],
})
export class NewlistPage implements OnInit {
 @Input ()
 title: string;
 previousVal:any;
 
// updatedList: string;
  categories = ['Work' , 'Personal' , 'Business' , 'Planned' , 'Shopping'];
  taskList;
  itemList;

  taskObject;
  taskCategory;
  itemCategory;
  constructor(public modalCtrl: ModalController, private route: ActivatedRoute, private router: Router) {
    this.itemList = history.state.itemList;
    this.itemCategory = history.state.itemCategory;
  }
  
  ngOnInit() {
    this.taskList = this.previousVal
  }

  async dismiss(){
    console.log(this.taskObject);
    await this.modalCtrl.dismiss(this.taskObject);

  }
  // selectedCategory(index){
  //   this.taskCategory = this.categories[index];
  // }
 
  addNew(){
    
      this.taskObject = ({
        itemList: this.taskList,
        itemCategory: this.itemCategory,
      })

    
    // console.log(i);
    this.dismiss();
  }
}
