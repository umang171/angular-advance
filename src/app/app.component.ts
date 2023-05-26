import { AfterContentInit, Component, ViewChild, ViewContainerRef,ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  remember:boolean=false;
  @ViewChild('entry',{read:ViewContainerRef})
  entry!:ViewContainerRef;
  constructor(){}

  ngAfterViewInit(): void {
    const component=this.entry.createComponent(AuthFormComponent);
  }

  loginUser(event:any){
    console.log(event,this.remember);
  }
}
