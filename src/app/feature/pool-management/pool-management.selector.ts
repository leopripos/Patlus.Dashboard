import { createSelector } from '@ngrx/store';
import { FeatureState } from '@app/feature/feature.state';
import { PoolManagementState } from './pool-management.state';

const featureState = (state: FeatureState) => state.poolManagement;

const isLoading = createSelector(
  featureState,
  (state: PoolManagementState) => state.isLoading
);

const collection = createSelector(
  featureState,
  (state: PoolManagementState) => state.pools
);

const collectionArray = createSelector(
  featureState,
  (state: PoolManagementState) => state.pools.ids.map(id => state.pools.entities[id])
);

const errors = createSelector(
  featureState,
  (state: PoolManagementState) => state.error
);

const selectedId = createSelector(
  featureState,
  (state: PoolManagementState) => state.selectedPoolId
);

const selected = createSelector(
  featureState,
  (state: PoolManagementState) => state.pools.entities[state.selectedPoolId]
);

export const PoolManagementSelectors = {
  featureState,
  isLoading,
  collection,
  collectionArray,
  selectedId,
  selected,
  errors
};
