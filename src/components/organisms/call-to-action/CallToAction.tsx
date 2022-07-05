import { useAppContext } from "../../../../context/AppContext";
import AppButton from "../../atoms/app-button/AppButton";
import InputField from "../../atoms/input-field/InputField";
import SelectionRadioBtns from "../../atoms/selection-radio-btns/SelectionRadioBtns";
import { CallToActionProps } from "./CallToAction.d";

export default function CallToAction({
  onGetBtnClicked,
  onInputBoxChanged,
}: CallToActionProps) {
  const [state, dispatch] = useAppContext();
  return (
    <div className="w-full lg:w-3/5 m-auto my-0 flex flex-col  items-center ">
      <div className="mt-8 w-40 lg:mt-0 lg:w-52 justify-center ">
        <SelectionRadioBtns />
      </div>
      <div className="relative w-full mt-3 lg:w-4/5 h-12 lg:mt-0 mb-4 flex justify-center">
        <div className="w-full  h-12 mt-4 flex justify-center">
          <InputField onInputBoxChanged={onInputBoxChanged} />
        </div>
        {state.isUrlEmpty && (
          <div className="text-xs text-center lg:text-base text-red-700 mt-6  absolute top-12">
            Heyy, kindly paste a link in the search bar to continue.
          </div>
        )}
      </div>
      <div className="mt-10 w-[12rem] ">
        <AppButton padding="lg:py-3 px-8" onClick={onGetBtnClicked}>
          Get length
        </AppButton>
      </div>
    </div>
  );
}
