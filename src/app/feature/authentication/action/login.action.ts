import { Action } from '@ngrx/store';
import { ActionType } from './action-type';
import { ErrorPayload } from '@app/common/payload';

export class LoginRequestAction implements Action {
  readonly type = ActionType.LoginRequest;
  name: string;
  password: string;
}

export class LoginSuccessAction implements Action {
  readonly type = ActionType.LoginSuccess;
}

export class LoginErrorAction implements Action {
  readonly type = ActionType.LoginError;
  readonly error: ErrorPayload;

  constructor(error: ErrorPayload) {
    this.error = error;
  }
}
