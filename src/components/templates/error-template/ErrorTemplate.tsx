import { useAppContext } from "../../../../context/AppContext";
import AppButton from "../../atoms/app-button/AppButton";
import InputField from "../../atoms/input-field/InputField";
import SelectionRadioBtns from "../../atoms/selection-radio-btns/SelectionRadioBtns";
import { ErrorSummary } from "../../organisms/error-summary/ErrorSummary";
import Footer from "../../organisms/footer/Footer";
import NavBar from "../../organisms/nav-bar/NavBar";
import { ErrorTemplateProps } from "./ErrorTemplate.d";

export default function ErrorTemplate({
  onSearchBtnClicked,
  onInputBoxChanged,
}: ErrorTemplateProps) {
  const [state, dispatch] = useAppContext();
  return (
    <div className="grid-container">
      <NavBar />

      <div className="mt-3 lg:mt-0 flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <ErrorSummary />
        </div>
        <div className=" mt-10 w-[12rem] min-h-min flex justify-center">
          <SelectionRadioBtns />
        </div>
        <div className=" w-full lg:w-3/5 h-12 my-4  flex gap-3 min-h-min justify-center relative">
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
