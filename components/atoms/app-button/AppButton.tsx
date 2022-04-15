import AppButtonProps from "./AppButton.d";

const AppButton: React.FC<AppButtonProps> = ({ children, padding }) => {
  return (
    <button
      className={`whitespace-nowrap text-center ${padding} p-2 text-lg    text-white bg-primary-veryDarkBlue w-full h-full `}
    >
      {children}
    </button>
  );
};

export default AppButton;
