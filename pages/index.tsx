import HomeTemplate from "../src/components/templates/home-template/HomeTemplate";
import { useRouter } from "next/router";
import { useAppContext } from "../context/AppContext";
import { handleBtnClicked, handleTextChange } from "../utils/functions";

export default function Home() {
  const [state, dispatch] = useAppContext();
  const router = useRouter();

  return (
    <div>
      <HomeTemplate
        onGetBtnClicked={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleBtnClicked(state.url, dispatch, state, router)
        }
        onInputBoxChanged={(e) =>
          handleTextChange(e.currentTarget.value, dispatch)
        }
      />
    </div>
  );
}
