import AppButton from "../../atoms/app-button/AppButton";
import InputField from "../../atoms/input-field/InputField";
import SelectionDropDown from "../../atoms/selection-dropdown/SelectionDropdown";
import { InputBoxProps } from "./InputBox.d";

export default function InputBox({
  includeSearchBox,
  onInputBoxChanged,
}: InputBoxProps) {
  return (
    <div className="border-8 border-slate-300 w-full h-full flex   ">
      <div className="w-32 ">
        <SelectionDropDown />
      </div>
      <div className="min-h-max grow ">
        <InputField onInputBoxChanged={onInputBoxChanged} />
      </div>
      <div
        className={`  ${
          includeSearchBox ? "inline-block" : "hidden"
        } min-h-max`}
      >
        <AppButton onClick={() => {}}>
          <img src="/icons/search_icon.svg" className="mx-auto px-4" alt="" />
        </AppButton>
      </div>
    </div>
  );
}
