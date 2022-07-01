import { ResultTemplateProps } from "./ResultTemplate.d";
import InputBox from "../../molecules/input-box/InputBox";
import ResultSummary from "../../molecules/result-summary/ResultSummary";
import Footer from "../../organisms/footer/Footer";
import NavBar from "../../organisms/nav-bar/NavBar";
import { useAppContext } from "../../../../context/AppContext";

export default function ResultTemplate({
  data,
  onSearchBtnClicked,
  onInputBoxChanged,
}: ResultTemplateProps) {
  const [state, dispatch] = useAppContext();
  return (
    <div className=" grid-container">
      <NavBar />
      <div className=" flex flex-col justify-center items-center">
        <div className=" w-3/4 h-16   flex justify-center">
          <InputBox
            includeSearchBox={true}
            onInputBoxChanged={onInputBoxChanged}
            onSearchBtnClicked={onSearchBtnClicked}
          />
        </div>
        {state.isUrlEmpty ? (
          <div className="text-red-700">Url Field cannot be empty</div>
        ) : null}
        <div className="mt-16 w-2/4 min-h-min  flex items-center">
          <ResultSummary
            originalLength={data?.originalLength}
            speeds={data?.speeds}
            resourceTitle={data?.resourceTitle}
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
