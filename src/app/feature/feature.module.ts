import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@env';

import { AuthenticationModule, ActionType as AuthenticationActionType } from './authentication';
import { PoolManagementModule } from './pool-management';
import { FeatureMetaReducers } from './feature.meta-reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}, {
      metaReducers: [
        FeatureMetaReducers.logout
      ],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),

    AuthenticationModule,
    PoolManagementModule
  ],
})
export class FeatureModule { }
