import { Action } from '@ngrx/store';
import { ActionType } from './action-type';
import { ErrorPayload } from '@app/common/payload';
import { PoolModel, PoolCollection } from '../common';

export class LoadRequestAction implements Action {
  readonly type = ActionType.LoadRequest;
}

export class LoadSuccessAction implements Action {
  readonly type = ActionType.LoadSuccess;
  readonly pools: PoolCollection;

  constructor(pools: PoolCollection) {
    this.pools = pools;
  }
}

export class LoadErrorAction implements Action {
  readonly type = ActionType.LoadError;
  readonly error: ErrorPayload;

  constructor(error: ErrorPayload) {
    this.error = error;
  }
}
