import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.scss']
})
export class AuthRememberComponent {
  @Output()
  checked:EventEmitter<any>=new EventEmitter();
  onChecked(value:boolean){ 
    this.checked.emit(value);  
  }
}
