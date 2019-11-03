import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { FeatureState } from '@app/feature/feature.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from '../../authentication.selector';


@Injectable()
export class AuthenticatedGuard implements CanActivate {

  isAuthenticated$: Observable<boolean>;

  constructor(
    public store: Store<FeatureState>,
    public router: Router
  ) {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.isAuthenticated$.pipe(
      map(authenticated => {
        if (authenticated === true) {
          return true;
        }
        return this.router.parseUrl('/login');
      })
    );
  }
}
