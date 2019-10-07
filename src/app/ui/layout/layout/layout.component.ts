import { Component, ContentChild } from '@angular/core';
import { LayoutNavComponent } from '../layout-nav';
import { SiteNavService } from '../shared';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ContentChild(LayoutNavComponent, { static: false })
  private layoutNav: LayoutNavComponent;

  constructor(
    private siteNavService: SiteNavService
  ) { }

  get isNavOpened() {
    return this.siteNavService.isOpened;
  }

  get isOverMode() {
    return this.siteNavService.isOver();
  }

  get hasNav(): boolean {
    return this.layoutNav !== null;
  }

  navStateChanged(isOpened: boolean): void {
    if (this.siteNavService.isOpened !== isOpened) {
      this.siteNavService.toggle();
    }

  }
}
