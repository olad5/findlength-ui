import CallToAction from "../../organisms/call-to-action/CallToAction";
import Header from "../../organisms/header/Header";
import Instruction from "../../organisms/instructions/Instructions";
import NavBar from "../../organisms/nav-bar/NavBar";

export default function HomeTemplate() {
  return (
    <div>
      <div className="mt-8">
        <NavBar />
      </div>
      <div className="mt-8">
        <Header />
      </div>
      <div className="mt-8">
        <CallToAction />
      </div>
      <div className=" w-2/4 mx-auto  mt-16">
        <Instruction />
      </div>
    </div>
  );
}
