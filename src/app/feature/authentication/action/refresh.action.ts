import { Action } from '@ngrx/store';
import { ActionType } from './action-type';
import { ErrorPayload } from '@app/common/payload';

export class RefreshRequestAction implements Action {
  readonly type = ActionType.RefreshRequest;
}

export class RefreshSuccessAction implements Action {
  readonly type = ActionType.RefreshSuccess;
}

export class RefreshErrorAction implements Action {
  readonly type = ActionType.RefreshError;
  readonly error: ErrorPayload;

  constructor(error: ErrorPayload) {
    this.error = error;
  }
}
