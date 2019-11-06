import { Action } from '@ngrx/store';
import { ActionType } from './action-type';
import { ErrorPayload } from '@app/common/payload';

export class EnableRequestAction implements Action {
  readonly type = ActionType.EnableRequest;
}

export class EnableSuccessAction implements Action {
  readonly type = ActionType.EnableSuccess;
}

export class EnableErrorAction implements Action {
  readonly type = ActionType.EnableError;
  readonly error: ErrorPayload;

  constructor(error: ErrorPayload) {
    this.error = error;
  }
}
