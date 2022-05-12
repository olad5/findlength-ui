import { State, ResourceType } from "../types/types.d";

enum ActionType {
  URL_CHANGED = "url_changed",
  RESOURCE_CHANGED = "resource_changed",
}

type Action =
  | { type: ActionType.URL_CHANGED; value: string }
  | { type: ActionType.RESOURCE_CHANGED; value: ResourceType };

export const initialState: { url: string; resource: ResourceType } = {
  url: "",
  resource: ResourceType.VIDEO,
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

    default:
      return state;
  }
};
