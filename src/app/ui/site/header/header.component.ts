import { Component } from '@angular/core';
import { SiteNavService } from '@ui/layout';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FeatureState } from '@app/feature';
import { LogoutRequestAction } from '@app/feature/authentication';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private siteNavService: SiteNavService,
    private router: Router,
    private store: Store<FeatureState>
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
    this.store.dispatch(new LogoutRequestAction());
  }
}
