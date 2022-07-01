import { useState } from "react";
import { useAppContext } from "../../../../context/AppContext";
import SpeedResult from "../../atoms/speed-result/SpeedResult";
import { ResultSummaryProps } from "./ResultSummary.d";

export default function ResultSummary({
  originalLength,
  speeds,
  resourceTitle,
}: ResultSummaryProps) {
  const [state, dispatch] = useAppContext();
  const [currentResource, setCurrentResource] = useState<string>(
    state.resource
  );

  return (
    <div className="flex flex-col gap-2  items-center mt-3 w-full h-full ">
      <h2 className="text-primary-veryDarkBlue font-Syne font-medium text-lg">
        Results for:{"  "}
        <span className="font-bold">{resourceTitle}</span>
      </h2>
      <div className="flex flex-col gap-4  items-center mt-3 w-full h-full shadow-[0px_3px_12px_0.1px] shadow-secondary-sand px-4">
        <div className="flex items-center gap-4 ">
          <div className="flex gap-4 p-2">
            <img src="/icons/timer-primary.svg" alt="timer icon" />
            <div className="flex flex-col  ">
              <p className="">
                Total length of the{" "}
                {currentResource.charAt(0).toUpperCase() +
                  currentResource.slice(1)}
                :
              </p>
              <p className=" text-lg text-primary-veryDarkBlue font-bold">
                {originalLength}.
              </p>
            </div>
          </div>
        </div>

        <hr className=" w-full border-t-1 border-secondary-sand  " />

        <div className="flex-1 flex flex-col  ">
          {speeds?.map((speed, index) => (
            <div key={index} className="min-w-max  flex flex-col   gap-2  my-2">
              <SpeedResult data={speed} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
