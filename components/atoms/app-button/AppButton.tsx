import AppButtonProps from "./AppButton.d";

const AppButton: React.FC<AppButtonProps> = ({ children }) => {
  return (
    <button className="whitespace-nowrap text-center p-2  text-white bg-primary-veryDarkBlue w-full h-full ">
      {children}
    </button>
  );
};

export default AppButton;
