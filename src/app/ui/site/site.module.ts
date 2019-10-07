import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@ui/layout';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent
  ]
})
export class SiteModule { }
