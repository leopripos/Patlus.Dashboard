import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionType, LoginRequestAction, LoginSuccessAction, LoginErrorAction } from '../action';
import { AuthenticationService } from '../authentication.service';
import { TokenModel } from '../common/token.model';


@Injectable()
export class LoginEffect {

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  loginRequest$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionType.LoginRequest),
      mergeMap(action => this.handleLoginRequest(action))
    )
  );

  loginSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionType.LoginSuccess),
      mergeMap(action => this.handleLoginSuccess(action))
    )
  );

  handleLoginRequest(action: LoginRequestAction): Observable<Action> {
    return this.authenticationService.login({
      name: action.name,
      password: action.password
    }).pipe(
      map((token: TokenModel) => new LoginSuccessAction()),
      catchError((response: HttpErrorResponse) => {
        if (response.status === 400) {
          return of(new LoginErrorAction(response.error));
        } else {
          return of(new LoginErrorAction({
            message: 'Can not connect to server',
            details: {},
          }));
        }
      })
    );
  }

  handleLoginSuccess(action: LoginSuccessAction): Observable<Action> {
    this.router.navigate(['/']);
    return EMPTY;
  }
}
