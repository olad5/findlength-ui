import AppButton from "../../atoms/app-button/AppButton";
import InputField from "../../atoms/input-field/InputField";
import SelectionDropDown from "../../atoms/selection-dropdown/SelectionDropdown";
import InputBoxProps from "./InputBox.d";

const InputBox: React.FC<InputBoxProps> = ({ includeSearchBox }) => {
  return (
    <div className="border-4 border-slate-300 w-3/4   flex items-stretch  ">
      <div className="w-28 h-full">
        <SelectionDropDown
          active={false}
          selection="video"
          onClick={() => {}}
        />
      </div>
      <div className="min-h-max grow ">
        <InputField />
      </div>
      <div
        className={`  ${
          includeSearchBox ? "inline-block" : "hidden"
        } min-h-max`}
      >
        <AppButton onClick={() => {}}>
          <img src="/icons/search_icon.svg" className="mx-auto" alt="" />
        </AppButton>
      </div>
    </div>
  );
};

export default InputBox;