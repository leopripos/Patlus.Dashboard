import { Action } from '@ngrx/store';
import { ActionType } from './action-type';

export class LogoutRequestAction implements Action {
  readonly type = ActionType.LogoutRequest;
}

export class LogoutSuccessAction implements Action {
  readonly type = ActionType.LogoutSuccess;
}
