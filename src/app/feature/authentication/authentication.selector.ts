import { createSelector } from '@ngrx/store';
import { FeatureState } from '@app/feature/feature.state';
import { AuthenticationState } from './authentication.state';

export const selectAuthentication = (state: FeatureState) => state.authentication;

export const selectIsAuthenticating = createSelector(
  selectAuthentication,
  (state: AuthenticationState) => state.isAuthenticating
);

export const selectIsAuthenticated = createSelector(
  selectAuthentication,
  (state: AuthenticationState) => state.isAuthenticated
);

export const selectIsReauthenticating = createSelector(
  selectAuthentication,
  (state: AuthenticationState) => state.isAuthenticated && state.isAuthenticating
);

export const selectAuthenticationError = createSelector(
  selectAuthentication,
  (state: AuthenticationState) => state.error
);

