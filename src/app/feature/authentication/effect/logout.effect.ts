import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionType, LogoutSuccessAction, LogoutRequestAction } from '../action';
import { AuthenticationService } from '../authentication.service';


@Injectable()
export class LogoutEffect {

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  logoutRequest$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionType.LogoutRequest),
      mergeMap(action => this.handleLogoutRequest(action))
    )
  );

  logoutSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionType.LogoutSuccess),
      mergeMap(action => this.handleLogoutSuccess(action))
    )
  );

  handleLogoutRequest(action: LogoutRequestAction): Observable<Action> {
    this.authenticationService.logout();
    return of(new LogoutSuccessAction());
  }

  handleLogoutSuccess(action: LogoutSuccessAction): Observable<Action> {
    this.router.navigate(['/login']);
    return EMPTY;
  }
}
