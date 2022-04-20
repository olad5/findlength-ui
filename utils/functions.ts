import { NextRouter } from "next/router";
import { State } from "../types/types";

export function handleBtnClicked(
  inputBoxText: string,
  dispatch,
  state: State,
  router: NextRouter
) {
  if (inputBoxText) {
    dispatch({ type: "url_changed", value: inputBoxText });
    router.push({
      pathname: "/result",
      query: { url: inputBoxText, resource: state.resource },
    });
  }
}
export function handleTextChange(value: string, dispatch) {
  dispatch({ type: "url_changed", value: value });
}
