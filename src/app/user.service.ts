import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  
  private users;
    
  constructor(private http:HttpClient) { }
  public getUsers(){
    return this.http.get('/getusers');
  }
  public remove(user){
    let obj={id:user._id}
    this.http.post('/removeuser',obj,{responseType:'text'}).subscribe();
  }
  public add(user){
    this.http.post('/adduser',user,{responseType:'text'}).subscribe(data=>{
      console.log(data);
    });
  }
}
