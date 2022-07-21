import { State, ResourceType, ActionType } from "../types/types.d";

export type Action =
  | { type: ActionType.URL_CHANGED; value: string }
  | { type: ActionType.RESOURCE_CHANGED; value: ResourceType }
  | { type: ActionType.EMPTY_URL; value: boolean }
  | { type: ActionType.IS_LOADING; value: boolean };

export const initialState: {
  url: string;
  resource: ResourceType;
  isUrlEmpty: boolean;
  loading: boolean;
} = {
  url: "",
  resource: ResourceType.VIDEO,
  isUrlEmpty: false,
  loading: false,
};

export const AppReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.URL_CHANGED: {
      return {
        ...state,
        url: action.value,
      };
    }
    case ActionType.RESOURCE_CHANGED: {
      return {
        ...state,
        resource: action.value,
      };
    }

    case ActionType.EMPTY_URL: {
      return {
        ...state,
        isUrlEmpty: action.value,
      };
    }
    case ActionType.IS_LOADING: {
      return {
        ...state,
        loading: action.value,
      };
    }

    default:
      return state;
  }
};
