import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
@Component({
  selector: 'app-viewteachers',
  templateUrl: './viewteachers.component.html',
  styleUrls: ['./viewteachers.component.css']
})
export class ViewteachersComponent implements OnInit {
  teachers:any = [];

  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getAllTeachers();
  }

  getAllTeachers(){
    this.teachers=[];
    return this.rest.getAllTeachers().subscribe((data:{}) => {
      console.log(data);
      this.teachers = data;
    })
  }

}
