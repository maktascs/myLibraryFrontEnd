import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {
  students:any = []
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents(){
    this.students = [];
    return this.rest.getAllStudents().subscribe((data:{}) =>{
      console.log(data);
      this.students=data;
    })
  }

}
