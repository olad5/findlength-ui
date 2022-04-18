import { AppButtonProps } from "./AppButton.d";

export default function AppButton({
  children,
  padding,
  onClick,
}: AppButtonProps) {
  return (
    <button
      className={`whitespace-nowrap text-center ${padding} p-2 text-lg    text-white bg-primary-veryDarkBlue w-full h-full `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
