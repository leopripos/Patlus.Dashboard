import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule } from '@angular/material';

import { LayoutComponent } from './layout/layout.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutNavComponent } from './layout-nav/layout-nav.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutNavComponent
  ],
  imports: [
    CommonModule,
    CdkLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutNavComponent,
    LayoutContentComponent,
    LayoutFooterComponent
  ]
})
export class LayoutModule { }
