import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.page.html',
  styleUrls: ['./mylist.page.scss'],
})
export class MylistPage implements OnInit {
  todoList = [
    {
      taskList : 'lorem Ipsum........',
    }
  ]

  constructor() { }
  list_del(index){
    this.todoList.splice(index,1);

  }
  ngOnInit() {
  }

}
