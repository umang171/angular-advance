import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  remember:boolean=false;
  rememberUser(remember:boolean){
    this.remember=remember;
  }
 
  createUser(event:any){
    console.log(event);
  }
  loginUser(event:any){
    console.log(event,this.remember);
  }
}
