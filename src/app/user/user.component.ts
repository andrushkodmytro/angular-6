import {Component, Input, Output, EventEmitter} from '@angular/core';
import { UserService } from '../user.service';
@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent{
    name:string='Ivan';
    @Input() user;
    @Output() eventUsers=new EventEmitter()
    sendUsers(){
        this.eventUsers.emit();
    }
    constructor(private userService:UserService){
    }
    removeUser(user){
        this.userService.remove(user);
        this.sendUsers()
    }
    
    changeAge(){
        this.user.age++;
    }


}