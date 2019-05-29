import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private rest:RestService) { }

  ngOnInit() {
  }

  addUser(form){
    console.log(form);
    return this.rest.addUser(form);
  }

}
