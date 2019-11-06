import { Action } from '@ngrx/store';
import { ActionType } from './action-type';
import { ErrorPayload } from '@app/common/payload';

export class UpdateRequestAction implements Action {
  readonly type = ActionType.UpdateRequest;
}

export class UpdateSuccessAction implements Action {
  readonly type = ActionType.UpdateSuccess;
}

export class UpdateErrorAction implements Action {
  readonly type = ActionType.UpdateError;
  readonly error: ErrorPayload;

  constructor(error: ErrorPayload) {
    this.error = error;
  }
}
