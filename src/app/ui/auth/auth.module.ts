import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatButtonModule } from '@angular/material';

import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class AuthModule { }
