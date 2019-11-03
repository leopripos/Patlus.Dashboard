import { NgModule, InjectionToken, inject } from '@angular/core';
import { StoreModule, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationReducer } from './authentication.reducer';
import { AuthenticationService } from './authentication.service';
import { TokenResolverService } from './token-resolver.service';

import { BearerTokenInterceptor, AuthenticatedGuard, UnauthenticatedGuard } from './interceptor';
import { LoginEffect, LogoutEffect, RefreshEffect } from './effect';
import { AuthenticationState } from './authentication.state';
import { AuthenticationActions } from './action';

export function authenticationReducerFactory(reducer: AuthenticationReducer): ActionReducer<AuthenticationState, AuthenticationActions> {
  return reducer.actionReducer;
}

const REDUCER_TOKEN = new InjectionToken<ActionReducer<AuthenticationState>>('Authentication Reducer', {
  factory: () => {
    const reducer = inject(AuthenticationReducer);
    return reducer.actionReducer;
  }
});

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('authentication', REDUCER_TOKEN),
    EffectsModule.forFeature([LoginEffect, LogoutEffect, RefreshEffect])
  ],
  providers: [
    LoginEffect,
    LogoutEffect,
    AuthenticationService,
    AuthenticationReducer,
    AuthenticatedGuard,
    UnauthenticatedGuard,
    TokenResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerTokenInterceptor,
      multi: true
    }
  ]
})
export class AuthenticationModule { }
