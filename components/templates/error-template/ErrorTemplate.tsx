import InputBox from "../../molecules/input-box/InputBox";
import { ErrorSummary } from "../../organisms/error-summary/ErrorSummary";
import Footer from "../../organisms/footer/Footer";
import NavBar from "../../organisms/nav-bar/NavBar";
import { ErrorTemplateProps } from "./ErrorTemplate.d";

export default function ErrorTemplate({
  onSearchBtnClicked,
  onInputBoxChanged,
}: ErrorTemplateProps) {
  return (
    <div className="grid-container">
      <NavBar />
      <div className=" flex flex-col justify-center items-center">
        <div className=" w-3/4 h-16   flex justify-center">
          <InputBox
            includeSearchBox={true}
            onInputBoxChanged={onInputBoxChanged}
            onSearchBtnClicked={onSearchBtnClicked}
          />
        </div>
        <ErrorSummary />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
