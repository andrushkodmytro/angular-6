import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string='app';
  content:string='parentContent'
  counter:number=0;
  public users;
  public userName='';
  public userAge='';
  constructor(private userService:UserService) {
  }
  loadUsers(){
      this.userService.getUsers().subscribe(data=>{
      this.users=data;
    }
    );
    console.log(this.users);
  }
  ngOnInit(){
    this.loadUsers()
  }
  addUser(name,age){
    if(!name||!age) return;
    let user={
      name:name,
      age:age
    }
    this.userName='';
    this.userAge='';
    this.userService.add(user);
    this.loadUsers();
}
  changeCount(value){
    console.log('test');
    console.log(value);
    if(value)
    this.counter++;
    else
    this.counter--;
  }
  
}
