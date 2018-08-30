import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Output() boolEvent=new EventEmitter<boolean>()
  sendBool(value){
    this.boolEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
