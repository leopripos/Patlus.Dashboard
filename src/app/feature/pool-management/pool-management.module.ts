import { NgModule, InjectionToken, inject } from '@angular/core';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PoolManagementReducer } from './pool-management.reducer';
import { PoolManagementService } from './pool-management.service';
import { PoolManagementState } from './pool-management.state';

import { LoadEffect } from './effect';
import { PoolManagementActions } from './action';

export function authenticationReducerFactory(reducer: PoolManagementReducer): ActionReducer<PoolManagementState, PoolManagementActions> {
  return reducer.actionReducer;
}

const REDUCER_TOKEN = new InjectionToken<ActionReducer<PoolManagementState>>('Pool Management Reducer', {
  factory: () => {
    const reducer = inject(PoolManagementReducer);
    return reducer.actionReducer;
  }
});

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('poolManagement', REDUCER_TOKEN),
    EffectsModule.forFeature([LoadEffect])
  ],
  providers: [
    LoadEffect,
    PoolManagementService,
    PoolManagementReducer,
  ]
})
export class PoolManagementModule { }
