import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {


  constructor(private rest: RestService) { }

  ngOnInit() {
   
 
  }
  formSubmit(frm){
    console.log(frm.catname)
    this.rest.addCategory(frm.catname)
  }
}
