import { TokenModel } from './common/token.model';
import { ErrorPayload, FailurePayload } from '@common/payload';

export interface AuthenticationState {
  lastAuthenticationTime?: string;
  isAuthenticating?: boolean;
  isAuthenticated?: boolean;
  isLoggingOut?: boolean;
  token?: TokenModel;
  error?: ErrorPayload;
  failure?: FailurePayload;
}

export function createIntialState(): AuthenticationState {
  return {
    lastAuthenticationTime: new Date().toISOString(),
    isAuthenticating: false,
    isAuthenticated: false,
    isLoggingOut: false,
    token: null,
    error: null,
    failure: null,
  };
}
