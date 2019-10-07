import { Component } from '@angular/core';
import { SiteNavService } from '@ui/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private siteNavService: SiteNavService,
    private router: Router
  ) {
  }

  get isNavOpened() {
    return this.siteNavService.isOpened;
  }

  get isOverMode() {
    return this.siteNavService.isOver;
  }

  toggleNav(): void {
    this.siteNavService.toggle();
  }

  onLogout(event: any) {
    this.router.navigateByUrl('/login');
  }
}
