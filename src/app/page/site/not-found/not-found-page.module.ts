import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { NotFoundPageRoutingModule } from './not-found-page-routing.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule
  ]
})
export class NotFoundPageModule { }
