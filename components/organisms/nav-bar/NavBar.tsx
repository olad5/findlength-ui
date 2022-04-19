import { useRouter } from "next/router";
import { useAppContext } from "../../../context/AppContext";

export default function NavBar() {
  const router = useRouter();
  const [state, dispatch] = useAppContext();

  function handleClick() {
    dispatch({ type: "url_changed", value: "" });
    router.push("/");
  }

  return (
    <div className="flex justify-between w-full m-auto items-center">
      <button
        className="flex cursor-pointer items-center "
        onClick={handleClick}
      >
        <img src="/icons/play-btn-fill.svg" alt="" className="w-6" />
        <p className="text-secondary-sand ml-2 text-2xl">Findlength</p>
      </button>
      <div>
        <a href="#">
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
