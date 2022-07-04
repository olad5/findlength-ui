import { ResultTemplateProps } from "./ResultTemplate.d";
import ResultSummary from "../../molecules/result-summary/ResultSummary";
import Footer from "../../organisms/footer/Footer";
import NavBar from "../../organisms/nav-bar/NavBar";
import { useAppContext } from "../../../../context/AppContext";
import SelectionRadioBtns from "../../atoms/selection-radio-btns/SelectionRadioBtns";
import InputField from "../../atoms/input-field/InputField";
import AppButton from "../../atoms/app-button/AppButton";

export default function ResultTemplate({
  data,
  onSearchBtnClicked,
  onInputBoxChanged,
}: ResultTemplateProps) {
  const [state, dispatch] = useAppContext();
  return (
    <div className=" grid-container">
      <NavBar />
      <div className=" flex flex-col  items-center ">
        <div className="  min-h-min min-w-min  flex items-center">
          <ResultSummary
            originalLength={data?.originalLength}
            speeds={data?.speeds}
            resourceTitle={data?.resourceTitle}
          />
        </div>
        <div className=" mt-10 w-[12rem] min-h-min flex justify-center">
          <SelectionRadioBtns />
        </div>
        <div className=" w-3/5 h-12 my-4  flex gap-3 min-h-min justify-center relative">
          <div className="grow">
            <InputField onInputBoxChanged={onInputBoxChanged} />
          </div>
          <div>
            <AppButton onClick={onSearchBtnClicked}>
              <img
                src="/icons/search_icon.svg"
                className="mx-auto px-4"
                alt=""
              />
            </AppButton>
          </div>
          {state.isUrlEmpty && (
            <div className="text-red-700 mt-3  absolute top-12">
              Heyy, kindly paste a link in the search bar to continue.
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
