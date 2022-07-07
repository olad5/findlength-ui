import { InputFieldProps } from "./InputField.d";
import { useAppContext } from "../../../../context/AppContext";

export default function InputField({ onInputBoxChanged }: InputFieldProps) {
  const [state, dispatch] = useAppContext();
  return (
    <div className="w-full  h-full">
      <input
        className="text-xs lg:text-sm placeholder:text-slate-500  w-full pl-4 pr-2  h-full border-2 border-secondary-sand  focus:border-0 shadow-[0px_6px_12px_2px] shadow-secondary-sand"
        type=" text"
        placeholder="Paste Youtube Link here"
        onChange={onInputBoxChanged}
        defaultValue={state.url}
      />
    </div>
  );
}
