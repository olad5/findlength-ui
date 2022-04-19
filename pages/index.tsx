import HomeTemplate from "../components/templates/home-template/HomeTemplate";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

export default function Home() {
  const [state, dispatch] = useAppContext();
  const [inputBoxText, setInputBoxText] = useState<string>(state.url);
  const router = useRouter();

  function handleBtnClicked() {
    if (inputBoxText) {
      dispatch({ type: "url_changed", value: inputBoxText });
      router.push({
        pathname: "/result",
        query: { url: inputBoxText, resource: state.resource },
      });
    }
  }

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputBoxText(e.currentTarget.value);
  }

  return (
    <div>
      <HomeTemplate
        onGetBtnClicked={handleBtnClicked}
        onInputBoxChanged={handleTextChange}
      />
    </div>
  );
}
