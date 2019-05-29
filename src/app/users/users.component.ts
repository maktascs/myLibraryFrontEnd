import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = []
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = [];
    return this.rest.getAllUsers().subscribe((data:{})=>{
      console.log(data);
      this.users = data;
    })
  }
  }

