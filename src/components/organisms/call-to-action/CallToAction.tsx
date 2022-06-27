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
    <div className="w-3/5  m-auto flex flex-col  items-center">
      <div className="justify-center w-1/3">
        <SelectionRadioBtns />
      </div>
      <div className="w-full h-12 mt-4 flex justify-center">
        <InputField onInputBoxChanged={onInputBoxChanged} />
      </div>
      {state.isUrlEmpty ? (
        <div className="text-red-700">Url Field cannot be empty</div>
      ) : null}
      <div className=" w-[14rem] mt-8 ">
        <AppButton padding="py-3 px-8" onClick={onGetBtnClicked}>
          Get length
        </AppButton>
      </div>
    </div>
  );
}
