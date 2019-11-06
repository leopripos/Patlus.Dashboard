import { PoolCollection } from './common';
import { ErrorPayload, FailurePayload } from '@common/payload';

export interface PoolManagementState {
  isLoading?: boolean;
  pools: PoolCollection;
  selectedPoolId: string;
  error?: ErrorPayload;
  failure?: FailurePayload;
}

export function createIntialState(): PoolManagementState {
  return {
    isLoading: false,
    pools: {
      ids: [],
      entities: {}
    },
    selectedPoolId: null,
    error: null,
    failure: null,
  };
}
