import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NewComponent } from './new/new.component';
import { CounterComponent } from './counter/counter.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import {FormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router'

const routes=[
  {path:'',component:HomeComponent},
  {path:'cart',component:CartComponent}
]

  

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewComponent,
    CounterComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
