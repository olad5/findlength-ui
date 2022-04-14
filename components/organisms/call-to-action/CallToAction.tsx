import AppButton from "../../atoms/app-button/AppButton";
import InputBox from "../../molecules/input-box/InputBox";

export default function CallToAction() {
  return (
    <div className="w-2/4 m-auto flex flex-col  items-center">
      <InputBox includeSearchBox={false} />
      <div className=" w-1/4 mt-8 ">
        <AppButton onClick={() => {}}>Get length</AppButton>
      </div>
    </div>
  );
}
