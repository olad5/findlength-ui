import { TailSpin } from "react-loader-spinner";
import { useAppContext } from "../../../../context/AppContext";
import AppButton from "../../atoms/app-button/AppButton";
import InputField from "../../atoms/input-field/InputField";
import SelectionRadioBtns from "../../atoms/selection-radio-btns/SelectionRadioBtns";
import { CallToActionProps } from "./CallToAction.d";

export default function CallToAction({
  onGetBtnClicked,
  onInputBoxChanged,
}: CallToActionProps) {
  const [state, dispatch] = useAppContext();

  return (
    <div className="w-full xl:w-3/5 m-auto my-0 flex flex-col  items-center ">
      <div className="mt-8 w-40 xl:mt-4 lg:w-52 justify-center ">
        <SelectionRadioBtns />
      </div>
      <div className="relative w-full mt-3 xl:w-4/5 h-12 lg:mt-0 mb-4 flex justify-center">
        <div className="w-full  h-12 mt-4 flex justify-center">
          <InputField onInputBoxChanged={onInputBoxChanged} />
        </div>
        {state.isUrlEmpty && (
          <div className="text-xs text-center xl:text-base text-red-700 mt-6  absolute top-12">
            Heyy, kindly paste a link in the search bar to continue.
          </div>
        )}
      </div>
      <div className="mt-10 w-[12rem]  ">
        <AppButton padding="xl:py-3 px-8" onClick={onGetBtnClicked}>
          {state.loading ? (
            <div className="w-3/5 ">
              <TailSpin
                ariaLabel="loading-indicator"
                color="white"
                height={35}
              />
            </div>
          ) : (
            <>Get length</>
          )}
        </AppButton>
      </div>
    </div>
  );
}
