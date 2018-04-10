import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './wares-list.component.html',
  styleUrls: ['./wares-list.component.css']
})
export class WaresListComponent implements OnInit {

  public list = [
    {
      name: 'foo',
      price: 123,
      picture: '/assets/adminlte/user1-128x128.jpg'
    },
    {
      name: 'foytho',
      price: 1223,
      picture: '/assets/adminlte/user1-128x128.jpg'
    },
    {
      name: 'ghjgh',
      price: 222,
      picture: '/assets/adminlte/user1-128x128.jpg'
    },
    {
      name: 'fhjghjoo',
      price: 122223,
      picture: '/assets/adminlte/user1-128x128.jpg'
    },
    {
      name: 'dfvdfv',
      price: 123333,
      picture: '/assets/adminlte/user1-128x128.jpg'
    }
  ];

  date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
