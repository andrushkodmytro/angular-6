import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Input() name;
  value:string;
  myclass:string='red';
  color:string='green';
  changeColor(color){
    this.color=color;
  }

  constructor() {
    setTimeout(()=>this.myclass='green',4000);
    console.log('constructor-'+this.name);
    //this.value='super-'+this.name;
   }

  ngOnInit() {
    console.log('ngOnInit-'+this.name)
    this.value='super'+this.name;
  }

}
