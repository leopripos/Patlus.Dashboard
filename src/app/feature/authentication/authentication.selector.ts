import { createSelector } from '@ngrx/store';
import { FeatureState } from '@app/feature/feature.state';
import { AuthenticationState } from './authentication.state';

const featureState = (state: FeatureState) => state.authentication;

const isAuthenticating = createSelector(
  featureState,
  (state: AuthenticationState) => state.isAuthenticating
);

export const isAuthenticated = createSelector(
  featureState,
  (state: AuthenticationState) => state.isAuthenticated
);

export const isReauthenticating = createSelector(
  featureState,
  (state: AuthenticationState) => state.isAuthenticated && state.isAuthenticating
);

export const error = createSelector(
  featureState,
  (state: AuthenticationState) => state.error
);

export const AuthenticationSelectors = {
  featureState,
  isAuthenticating,
  isAuthenticated,
  isReauthenticating,
  error
};
