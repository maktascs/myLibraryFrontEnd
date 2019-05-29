import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
@Component({
  selector: 'app-viewadmins',
  templateUrl: './viewadmins.component.html',
  styleUrls: ['./viewadmins.component.css']
})
export class ViewadminsComponent implements OnInit {
  admins:any = [];
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getAllAdmins();

  }
getAllAdmins(){
  this.admins=[];
  return this.rest.getAllAdmins().subscribe((data:{})=>{
    console.log(data);
    this.admins=data;
  })
}
}
