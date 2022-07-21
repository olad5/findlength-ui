export type APIResponse = {
  status: boolean;
  message: string;
  resourceTitle: string;
  originalLength: string;
  speeds: {
    id: number;
    speed: number;
    length: string;
  }[];
};

export enum ResourceType {
  VIDEO = "video",
  PLAYLIST = "playlist",
}

export type Resource = {
  resource: ResourceType;
};

export enum ActionType {
  URL_CHANGED = "URL_CHANGED",
  RESOURCE_CHANGED = "RESOURCE_CHANGED",
  EMPTY_URL = "EMPTY_URL",
  IS_LOADING = "IS_LOADING",
}

export type State = {
  url: string;
  isUrlEmpty: boolean;
  loading: boolean;
} & Resource;

export type ContextProps = [state: State, dispatch: Dispatch<Action>];
