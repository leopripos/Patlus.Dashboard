import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LayoutModule } from '@ui/layout';
import { SiteModule } from '@ui/site';
import { PoolListTableModule } from '@feature-ui/pool-management';

import { MainComponent } from './main/main.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    SiteModule,
    PoolListTableModule
  ]
})
export class HomePageModule { }
