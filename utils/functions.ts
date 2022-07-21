import { NextRouter } from "next/router";
import { Dispatch } from "react";
import { Action } from "../context/AppReducer";
import { ActionType, State } from "../types/types.d";

export function handleBtnClicked(
  inputBoxText: string,
  dispatch: Dispatch<Action>,
  state: State,
  router: NextRouter
) {
  if (inputBoxText) {
    dispatch({ type: ActionType.URL_CHANGED, value: inputBoxText });
    dispatch({ type: ActionType.IS_LOADING, value: true });
    router.push({
      pathname: "/result",
      query: { url: inputBoxText, resource: state.resource },
    });
  } else {
    dispatch({ type: ActionType.EMPTY_URL, value: true });
  }
}
export function handleTextChange(value: string, dispatch: Dispatch<Action>) {
  dispatch({ type: ActionType.URL_CHANGED, value: value });
  dispatch({ type: ActionType.EMPTY_URL, value: false });
}
