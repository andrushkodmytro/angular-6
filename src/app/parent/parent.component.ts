import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  color:string='red';
  data='parentData'
  changeColor(color){
    this.color=color;
  }
  constructor() { }

  ngOnInit() {
  }

}
