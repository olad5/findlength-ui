import { APIResponse } from "../../../types/types.d";

export type ResultTemplateProps = {
  data: Pick<APIResponse, "originalLength" | "speeds">;
};
