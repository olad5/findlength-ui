import { ResultTemplateProps } from "./ResultTemplate.d";
import InputBox from "../../molecules/input-box/InputBox";
import ResultSummary from "../../molecules/result-summary/ResultSummary";
import Footer from "../../organisms/footer/Footer";
import NavBar from "../../organisms/nav-bar/NavBar";

export default function ResultTemplate({ data }: ResultTemplateProps) {
  return (
    <div className="">
      <div className="mt-8">
        <NavBar />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="mt-24 w-full h-16   flex justify-center">
          <InputBox includeSearchBox={true} onInputBoxChanged={() => {}} />
        </div>
        <div className="mt-16 w-3/4 h-[30vh] flex items-center">
          <ResultSummary
            originalLength={data?.originalLength}
            speeds={data?.videoSpeeds}
          />
        </div>
        <div className="w-3/4 mx-auto flex justify-center  mt-24 border-t-[1px] border-slate-200 py-6">
          <div className="mr-28 w-3/4 ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
