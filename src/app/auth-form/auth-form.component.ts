import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit,AfterViewInit{
  
  
  name!:string;
  password!:string;
  showMessage:boolean=false;
  @ContentChild(AuthRememberComponent)
  @Output()
  submitted:EventEmitter<any>=new EventEmitter();
  remember!:AuthRememberComponent;
  @ViewChild('email')
  email!:ElementRef;

  ngAfterContentInit(): void {
    if(this.remember){
      this.remember.checked.subscribe((checked:boolean)=>this.showMessage=checked);
    }
  }
  ngAfterViewInit(): void {
    this.email.nativeElement.setAttribute("placeholder","Email");
    this.email.nativeElement.focus();
  }
  onSubmit(values:any){
    this.submitted.emit(values);
  }
}
