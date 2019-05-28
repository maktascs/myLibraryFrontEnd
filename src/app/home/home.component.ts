import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {HeaderComponent} from '../header/header.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
stats:any = []
  constructor(public rest:RestService ) { }

  ngOnInit() {
    this.getStats();
  }
  getStats(){
    this.stats = [];
    this.rest.getStats().subscribe((data:{}) =>{
    console.log(data);
    this.stats = data;
  });
}

}
