import { ActionType, LoadSuccessAction, LoadErrorAction} from './action';
import { createIntialState, PoolManagementState } from './pool-management.state';
import { Injectable } from '@angular/core';
import { createReducer } from '@ngrx/store';

const INITIAL_STATE = createIntialState();

@Injectable()
export class PoolManagementReducer {

  createInitialState() {
    return INITIAL_STATE;
  }

  get actionReducer() {
    return createReducer(
      this.createInitialState(),
      {
        types: [ActionType.LoadRequest],
        reducer: (state: PoolManagementState) => {
          return {
            ...state,
            isLoading: true,
            error: null,
            failure: null,
          };
        }
      },
      {
        types: [ActionType.LoadSuccess],
        reducer: (state: PoolManagementState, action: LoadSuccessAction) => {
          return {
            ...state,
            pools: action.pools,
            action: action.pools,
            isLoading: false,
          };
        }
      },
      {
        types: [ActionType.LoadError],
        reducer: (state: PoolManagementState, action: LoadErrorAction) => {
          return {
            ...state,
            isLoading: false,
            error: action.error,
          };
        }
      },
    );
  }
}
