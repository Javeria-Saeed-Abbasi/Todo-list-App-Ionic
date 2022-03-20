import { Component } from '@angular/core';
// import { time } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [{
    itemName : '',
  }]
  today : number = Date.now();
  constructor() {}

}
