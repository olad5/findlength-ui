import { InputFieldProps } from "./InputField.d";
import { useAppContext } from "../../../../context/AppContext";

export default function InputField({ onInputBoxChanged }: InputFieldProps) {
  const [state, dispatch] = useAppContext();
  return (
    <div className="w-full  h-full">
      <input
        className="w-full pl-4 pr-2  h-full border-0 focus:border-0"
        type=" text"
        placeholder="Paste Youtube Link here"
        onChange={onInputBoxChanged}
        defaultValue={state.url}
      />
    </div>
  );
}
