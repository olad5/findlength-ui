export type APIResponse = {
  status: boolean;
  message: string;
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
}

export type State = {
  url: string;
  isUrlEmpty: boolean;
} & Resource;

export type ContextProps = [state: State, dispatch: Dispatch<Action>];
