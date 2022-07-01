import { APIResponse } from "../../../../types/types.d";

export type ResultTemplateProps = {
  data: Pick<APIResponse, "originalLength" | "speeds" | "resourceTitle">;
  onSearchBtnClicked?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onInputBoxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
