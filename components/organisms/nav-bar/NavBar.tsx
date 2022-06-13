import { useRouter } from "next/router";
import { useAppContext } from "../../../context/AppContext";
import { ActionType } from "../../../types/types.d";

export default function NavBar() {
  const router = useRouter();
  const [state, dispatch] = useAppContext();

  function handleClick() {
    dispatch({ type: ActionType.URL_CHANGED, value: "" });
    router.push("/");
  }

  return (
    <div className="flex justify-between w-full m-auto items-center">
      <button
        className="flex cursor-pointer items-center "
        onClick={handleClick}
      >
        <img src="/icons/Logo.svg" alt="" className="w-30" />
      </button>
      <div>
        <a href="https://github.com/olad5">
          <img
            src="/icons/github-original.svg"
            alt="github icon"
            className="w-6"
          />
        </a>
      </div>
    </div>
  );
}
