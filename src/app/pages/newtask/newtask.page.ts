import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.page.html',
  styleUrls: ['./newtask.page.scss'],
})
export class NewtaskPage implements OnInit {
categories = ['work' , 'personal' , 'business' , 'planned' , 'shopping']
 taskName = '';
 taskCategory = '';  
constructor() { }

  ngOnInit() {
  }
  selectedCategory(index){
    this.taskCategory = this.categories[index];
  }
}
