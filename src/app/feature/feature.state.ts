import { AuthenticationState } from './authentication';
import { PoolManagementState } from './pool-management/pool-management.state';

export interface FeatureState {
  authentication: AuthenticationState;
  poolManagement: PoolManagementState;
}
