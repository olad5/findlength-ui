import AppButtonProps from "./AppButton.d";

const AppButton: React.FC<AppButtonProps> = ({ children }) => {
  return (
    <button className="whitespace-nowrap text-center p-4 text-white bg-primary-veryDarkBlue w-full ">
      {children}
    </button>
  );
};

export default AppButton;
