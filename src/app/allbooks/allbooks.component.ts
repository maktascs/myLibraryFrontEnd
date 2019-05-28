import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
books:any = [];
  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  public getAllBooks(){
    this.books = [];
    return this.rest.getAllBooks().subscribe((data:{} ) =>{
      console.log(data);
      this.books = data;
    });
  }

}
