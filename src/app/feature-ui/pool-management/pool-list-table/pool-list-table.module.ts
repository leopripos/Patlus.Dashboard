import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';

import { PoolListTableComponent } from './pool-list-table.component';

@NgModule({
  declarations: [
    PoolListTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule
  ],
  exports: [
    PoolListTableComponent
  ]
})
export class PoolListTableModule { }
