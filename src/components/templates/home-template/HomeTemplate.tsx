import CallToAction from "../../organisms/call-to-action/CallToAction";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";
import Instruction from "../../organisms/instructions/Instructions";
import NavBar from "../../organisms/nav-bar/NavBar";
import { HomeTemplateProps } from "./HomeTemplate.d";

export default function HomeTemplate({
  onGetBtnClicked,
  onInputBoxChanged,
}: HomeTemplateProps) {
  return (
    <div className="grid-container">
      <NavBar />
      <div className="flex flex-col justify-between">
        <Header />
        <CallToAction
          onGetBtnClicked={onGetBtnClicked}
          onInputBoxChanged={onInputBoxChanged}
        />
        <div className=" w-3/5 mx-auto  mt-7">
          <Instruction />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
