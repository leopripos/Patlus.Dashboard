import { ActionType } from './action-type';
import { LoginRequestAction, LoginSuccessAction, LoginErrorAction } from './login.action';
import { LogoutRequestAction, LogoutSuccessAction } from './logout.action';
import { RefreshRequestAction, RefreshSuccessAction, RefreshErrorAction } from './refresh.action';

export { ActionType };
export { LoginRequestAction, LoginSuccessAction, LoginErrorAction };
export { LogoutRequestAction, LogoutSuccessAction };
export { RefreshRequestAction, RefreshSuccessAction,  RefreshErrorAction};

export type AuthenticationActions = (
  | LoginRequestAction
  | LoginSuccessAction
  | LoginErrorAction

  | RefreshRequestAction
  | RefreshSuccessAction
  | RefreshErrorAction

  | LogoutRequestAction
  | LogoutSuccessAction
);
