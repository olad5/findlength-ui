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

export type Resource = {
  resource: "video" | "playlist";
};

export type State = {
  url: string;
} & Resource;
