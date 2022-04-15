import HomeTemplate from "../components/templates/home-template/HomeTemplate";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [inputBoxText, setInputBoxText] = useState("");
  const router = useRouter();

  function handleBtnClicked() {
    if (inputBoxText) {
      router.push("/result");
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
