export type APIResponse = {
  status: boolean;
  message: string;
  originalLength: string;
  videoSpeeds: {
    id: number;
    speed: number;
    length: string;
  }[];
};
