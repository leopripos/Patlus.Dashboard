import { Action } from '@ngrx/store';
import { ActionType } from './action-type';
import { ErrorPayload } from '@app/common/payload';

export class DisableRequestAction implements Action {
  readonly type = ActionType.DisableRequest;
}

export class DisableSuccessAction implements Action {
  readonly type = ActionType.DisableSuccess;
}

export class DisableErrorAction implements Action {
  readonly type = ActionType.DisableError;
  readonly error: ErrorPayload;

  constructor(error: ErrorPayload) {
    this.error = error;
  }
}
