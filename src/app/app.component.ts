import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string='app';
  content:string='parentContent'
  counter:number=0;

  changeCount(value){
    console.log('test');
    console.log(value);
    if(value)
    this.counter++;
    else
    this.counter--;
  }
  
}
