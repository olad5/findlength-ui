import { AppButtonProps } from "./AppButton.d";

export default function AppButton({
  children,
  padding,
  onClick,
}: AppButtonProps) {
  return (
    <button
      type="submit"
      className={`appButton whitespace-nowrap text-center ${padding} p-2 text-lg    text-white bg-primary-veryDarkBlue w-full h-full flex justify-center items-center  `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
