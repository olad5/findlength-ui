import { useRouter } from "next/router";
import ErrorTemplate from "../src/components/templates/error-template/ErrorTemplate";
import { useAppContext } from "../context/AppContext";
import { handleBtnClicked, handleTextChange } from "../utils/functions";
import { ActionType } from "../types/types.d";
import { useEffect } from "react";

export default function Error() {
  const [state, dispatch] = useAppContext();
  const router = useRouter();
  useEffect(() => {
    if (state.loading) {
      dispatch({ type: ActionType.IS_LOADING, value: false });
    }
  }, [router.query.timestamp]);

  return (
    <div>
      <ErrorTemplate
        onSearchBtnClicked={() =>
          handleBtnClicked(state.url, dispatch, state, router)
        }
        onInputBoxChanged={(e) =>
          handleTextChange(e.currentTarget.value, dispatch)
        }
      />
    </div>
  );
}
