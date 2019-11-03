import { ActionType, LoginErrorAction, RefreshErrorAction } from './action';
import { createIntialState, AuthenticationState } from './authentication.state';
import { Injectable } from '@angular/core';
import { createReducer } from '@ngrx/store';
import { TokenResolverService } from './token-resolver.service';

const INITIAL_STATE = createIntialState();

@Injectable()
export class AuthenticationReducer {

  constructor(
    private tokenResover: TokenResolverService
  ) { }

  createInitialState() {
    return {
      ...INITIAL_STATE,
      isAuthenticated: this.tokenResover.hasToken
    };
  }

  get actionReducer() {
    return createReducer(
      this.createInitialState(),
      {
        types: [ActionType.LoginRequest],
        reducer: (state: AuthenticationState) => {
          return {
            ...state,
            lastAuthenticationTime: new Date().toISOString(),
            isAuthenticating: true,
            isAuthenticated: false,
            token: null,
            error: null,
            failure: null,
          };
        }
      },
      {
        types: [ActionType.LoginSuccess],
        reducer: (state: AuthenticationState) => {
          return {
            ...state,
            isAuthenticating: false,
            isAuthenticated: true,
          };
        }
      },
      {
        types: [ActionType.LoginError],
        reducer: (state: AuthenticationState, action: LoginErrorAction) => {
          return {
            ...state,
            isAuthenticating: false,
            error: action.error,
          };
        }
      },
      {
        types: [ActionType.LogoutRequest],
        reducer: (state: AuthenticationState) => {
          return {
            ...state,
            isLoggingOut: true,
          };
        }
      },
      {
        types: [ActionType.LogoutSuccess],
        reducer: (state: AuthenticationState) => {
          return {
            ...state,
            isLoggingOut: false,
            isAuthenticated: false,
          };
        }
      },
      {
        types: [ActionType.RefreshRequest],
        reducer: (state: AuthenticationState) => {
          return {
            ...state,
            lastAuthenticationTime: new Date().toISOString(),
            isAuthenticating: true,
            token: null,
            error: null,
            failure: null,
          };
        }
      },
      {
        types: [ActionType.RefreshSuccess],
        reducer: (state: AuthenticationState) => {
          return {
            ...state,
            isAuthenticating: false,
          };
        }
      },
      {
        types: [ActionType.RefreshError],
        reducer: (state: AuthenticationState, action: RefreshErrorAction) => {
          return {
            ...state,
            isAuthenticating: false,
            isAuthenticated: false,
            error: action.error,
          };
        }
      },
    );
  }
}
