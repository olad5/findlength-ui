type state = {
  url: string;
};

enum ActionType {
  URL_CHANGED = "url_changed",
}

type Action = { type: ActionType.URL_CHANGED; value: string };

export const initialState = {
  url: "",
};

export const AppReducer = (state: state, action: Action) => {
  switch (action.type) {
    case ActionType.URL_CHANGED: {
      return {
        ...state,
        url: action.value,
      };
    }

    default:
      return state;
  }
};
