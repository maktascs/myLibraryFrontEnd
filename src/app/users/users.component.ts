import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = []
  constructor(private rest:RestService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = [];
    return this.rest.getAllUsers().subscribe((data:{})=>{
      //console.log(data);
      this.users = data;
    })
  }

  editUser(id){
    this.router.navigate(['/update-user'],{queryParams:{id:1}});
  }
  }

