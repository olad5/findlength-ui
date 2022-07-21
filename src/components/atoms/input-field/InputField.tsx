import { InputFieldProps } from "./InputField.d";
import { useAppContext } from "../../../../context/AppContext";
import { useRouter } from "next/router";
import { handleBtnClicked } from "../../../../utils/functions";

export default function InputField({ onInputBoxChanged }: InputFieldProps) {
  const [state, dispatch] = useAppContext();
  const router = useRouter();

  function handleInputSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleBtnClicked(state.url, dispatch, state, router);
  }

  return (
    <form onSubmit={handleInputSubmit} className="w-full  h-full">
      <input
        className="inputField text-xs lg:text-sm placeholder:text-slate-500  w-full pl-4 pr-2  h-full border-2 border-secondary-sand  focus:border-0 shadow-[0px_6px_12px_0.4px] shadow-secondary-sand"
        type=" text"
        placeholder="Paste Youtube Link here"
        onChange={onInputBoxChanged}
        defaultValue={state.url}
      />
    </form>
  );
}
