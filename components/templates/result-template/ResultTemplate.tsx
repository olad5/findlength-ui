import { ResultTemplateProps } from "./ResultTemplate.d";
import InputBox from "../../molecules/input-box/InputBox";
import ResultSummary from "../../molecules/result-summary/ResultSummary";
import Footer from "../../organisms/footer/Footer";
import NavBar from "../../organisms/nav-bar/NavBar";

export default function ResultTemplate({ data }: ResultTemplateProps) {
  return (
    <div className=" grid-container">
      <NavBar />
      <div className=" flex flex-col justify-center items-center">
        <div className=" w-3/4 h-16   flex justify-center">
          <InputBox includeSearchBox={true} onInputBoxChanged={() => {}} />
        </div>
        <div className="mt-16 w-3/4 h-[30vh] flex items-center">
          <ResultSummary
            originalLength={data?.originalLength}
            speeds={data?.speeds}
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
