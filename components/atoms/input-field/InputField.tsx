import InputFieldProps from "./InputField.d";

export default function InputField({ onInputBoxChanged }: InputFieldProps) {
  return (
    <div className="w-full  h-full">
      <input
        className="w-full pl-4  h-full border-0 focus:border-0"
        type=" text"
        placeholder="Paste Youtube Link here"
        onChange={onInputBoxChanged}
      />
    </div>
  );
}
