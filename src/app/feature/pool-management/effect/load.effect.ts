import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionType, LoadRequestAction, LoadSuccessAction, LoadErrorAction } from '../action';
import { PoolManagementService } from '../pool-management.service';
import { PoolModel, PoolCollection } from '../common';


@Injectable()
export class LoadEffect {

  constructor(
    private actions$: Actions,
    private poolManagementService: PoolManagementService,
  ) { }

  loadRequest$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadRequestAction>(ActionType.LoadRequest),
      mergeMap(action => this.handleLoadRequest(action))
    )
  );

  handleLoadRequest(action: LoadRequestAction): Observable<Action> {
    return this.poolManagementService.getAll()
      .pipe(
        map((pools: PoolModel[]) => this.mapToCollection(pools)),
        map((pools: PoolCollection) => new LoadSuccessAction(pools)),
        catchError((response: HttpErrorResponse) => {
          if (response.status === 0) {
            return of(new LoadErrorAction({
              message: 'Can not connect to server',
              details: {},
            }));
          } else {
            return of(new LoadErrorAction(response.error));
          }
        })
      );
  }

  private mapToCollection(pools: PoolModel[]): PoolCollection {
    return {
      ids: pools.map((pool) => {
        return pool.id;
      }),
      entities: pools.reduce((dic, pool) => {
        dic[pool.id] = pool;
        return dic;
      }, {})
    };
  }

}
