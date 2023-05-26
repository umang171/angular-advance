import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthFormRoutingModule } from './auth-form-routing.module';
import { AuthFormComponent } from './auth-form.component';


@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    AuthFormRoutingModule
  ]
})
export class AuthFormModule { }
