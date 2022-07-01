import { APIResponse } from "../../../../types/types.d";
export type ResultSummaryProps = Pick<
  APIResponse,
  "originalLength" | "speeds" | "resourceTitle"
>;
