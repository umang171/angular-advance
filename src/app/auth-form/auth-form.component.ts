import { AfterContentInit, Component, ContentChild, EventEmitter, Output } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit{
  
  name!:string;
  password!:string;
  showMessage:boolean=false;
  @ContentChild(AuthRememberComponent)
  remember!:AuthRememberComponent;
  ngAfterContentInit(): void {
    if(this.remember){
      this.remember.checked.subscribe((checked:boolean)=>this.showMessage=checked);
    }
  }
  @Output()
  submitted:EventEmitter<any>=new EventEmitter();
  onSubmit(values:any){
    this.submitted.emit(values);
  }
}
