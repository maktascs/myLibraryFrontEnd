import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.css']
})
export class AllcategoriesComponent implements OnInit {
  cats:any=[]
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){
    this.cats = [];
    return this.rest.getAllCategories().subscribe((data:{})=>{
      //console.log(data);
      this.cats = data;
    })
  }

}
