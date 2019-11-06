import { ActionType } from './action-type';
import { LoadRequestAction, LoadSuccessAction, LoadErrorAction } from './load.action';
import { CreateRequestAction, CreateSuccessAction, CreateErrorAction } from './create.action';
import { UpdateRequestAction, UpdateSuccessAction, UpdateErrorAction } from './update.action';
import { DisableRequestAction, DisableSuccessAction, DisableErrorAction } from './disable.action';
import { EnableRequestAction, EnableSuccessAction, EnableErrorAction } from './enable.action';

export { ActionType };
export { LoadRequestAction, LoadSuccessAction, LoadErrorAction };
export { CreateRequestAction, CreateSuccessAction,  CreateErrorAction};
export { UpdateRequestAction, UpdateSuccessAction, UpdateErrorAction };
export { DisableRequestAction, DisableSuccessAction,  DisableErrorAction};
export { EnableRequestAction, EnableSuccessAction,  EnableErrorAction};

export type PoolManagementActions = (
  | LoadRequestAction
  | LoadSuccessAction
  | LoadErrorAction

  | CreateRequestAction
  | CreateSuccessAction
  | CreateErrorAction

  | UpdateRequestAction
  | UpdateSuccessAction
  | UpdateErrorAction

  | DisableRequestAction
  | DisableSuccessAction
  | DisableErrorAction

  | EnableRequestAction
  | EnableSuccessAction
  | EnableErrorAction
);
