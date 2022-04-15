import AppButton from "../../atoms/app-button/AppButton";
import InputBox from "../../molecules/input-box/InputBox";

export default function CallToAction() {
  return (
    <div className="w-3/4  m-auto flex flex-col  items-center">
      <div className="w-full h-16   flex justify-center">
        <InputBox includeSearchBox={false} />
      </div>
      <div className=" w-[14rem] mt-8 ">
        <AppButton padding="py-3 px-8" onClick={() => {}}>
          Get length
        </AppButton>
      </div>
    </div>
  );
}
