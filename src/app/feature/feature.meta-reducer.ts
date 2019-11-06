import { ActionType as AuthenticationActionType } from './authentication';

const logout = (reducer) => {
  return (state, action) => {
    return reducer(action.type === AuthenticationActionType.LogoutSuccess ? undefined : state, action);
  };
};

export const FeatureMetaReducers = {
  logout
};
