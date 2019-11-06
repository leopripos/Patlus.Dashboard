import { Action } from '@ngrx/store';
import { ActionType } from './action-type';
import { ErrorPayload } from '@app/common/payload';

export class CreateRequestAction implements Action {
  readonly type = ActionType.CreateRequest;
}

export class CreateSuccessAction implements Action {
  readonly type = ActionType.CreateSuccess;
}

export class CreateErrorAction implements Action {
  readonly type = ActionType.CreateError;
  readonly error: ErrorPayload;

  constructor(error: ErrorPayload) {
    this.error = error;
  }
}
