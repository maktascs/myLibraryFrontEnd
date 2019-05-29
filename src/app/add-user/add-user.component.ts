import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  error:string;
  selectedtype:string;
  successmessage:string;
  errormessage:string;
  constructor(private rest:RestService, private router:Router) { }

  ngOnInit() {
  }

  addUser(form){

    return this.rest.addUser(form)
    .subscribe(res =>{
      this.successmessage = "Successfully created the user. Now you are being redirected automatically.";
      setTimeout(() => {this.router.navigate(['/users']);},3000);
    },
    err =>{
      this.errormessage="Error Happened."
    }
    
    );
  }
  
    
  
  checkType(e){
    this.selectedtype = e;
    //console.log(this.selectedtype);
  }
}
