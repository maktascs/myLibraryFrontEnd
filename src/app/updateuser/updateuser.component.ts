import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RestService} from '../rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  users:any=[];
  param:Number;
  selectedtype:string;
  constructor( private router:Router,private activatedroute:ActivatedRoute, private rest:RestService) { 
    

  }

  ngOnInit() {
    this.param = Number(this.activatedroute.snapshot.paramMap.get('id'))
    //console.log(this.param)

    this.getUserById(this.param);
  }

  getUserById(id){
    this.users = [];
    return this.rest.getUserById(id).subscribe((data:{})=>{
      this.users=data;
    })
  }

  editUser(editForm){
    console.log(editForm)
    this.rest.updateUser(editForm,this.param).subscribe(res =>{
      console.log(res);
    })
  }

  checkType(e){
    this.selectedtype = e;
    //console.log(this.selectedtype);
  }

}
