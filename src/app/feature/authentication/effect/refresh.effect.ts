import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionType } from '../action';
import { AuthenticationService } from '../authentication.service';
import { TokenModel } from '../common/token.model';
import { RefreshSuccessAction, RefreshErrorAction, RefreshRequestAction } from '../action';



@Injectable()
export class RefreshEffect {
  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  refreshRequest$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionType.RefreshRequest),
      mergeMap(action => this.handleRefreshRequest(action))
    )
  );

  refreshError$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionType.RefreshError),
      mergeMap(action => this.handleRefreshError(action))
    )
  );

  handleRefreshRequest(action: RefreshRequestAction): Observable<Action> {
    return this.authenticationService.refreshLogin()
      .pipe(
        map((token: TokenModel) => new RefreshSuccessAction()),
        catchError((response: HttpErrorResponse) => {
          return of(new RefreshErrorAction(response.error));
        })
      );
  }

  handleRefreshError(action: RefreshErrorAction): Observable<Action> {
    this.router.navigate(['/login']);
    return EMPTY;
  }
}
