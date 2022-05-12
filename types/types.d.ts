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

export type State = {
  url: string;
} & Resource;
