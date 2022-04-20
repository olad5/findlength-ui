import { useRouter } from "next/router";
import ErrorTemplate from "../components/templates/error-template/ErrorTemplate";
import { useAppContext } from "../context/AppContext";
import { handleBtnClicked, handleTextChange } from "../utils/functions";

export default function Error() {
  const [state, dispatch] = useAppContext();
  const router = useRouter();
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
