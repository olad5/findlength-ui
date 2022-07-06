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
    <div className="flex flex-col gap-2  items-center  w-full h-full px-0">
      <h2 className="text-center text-sm lg:text-lg lg:text-left text-primary-veryDarkBlue font-Syne font-medium ">
        Results for:{"  "}
        <span className="block lg:inline font-bold">{resourceTitle}</span>
      </h2>
      <div className="flex  flex-col gap-4   mt-3 w-full  h-full shadow-[0px_3px_12px_0.1px] shadow-secondary-sand px-3 lg:px-6 py-2 ">
        <div className="flex items-center gap-4 max-w-max">
          <div className="leading-[1.2rem] text-[.75rem] lg:text-lg flex gap-2 lg:gap-3 py-2">
            <img src="/icons/timer-primary.svg" alt="timer icon" width="" />
            <div className="flex flex-col">
              <p className=" ">
                Total length of the{" "}
                {currentResource.charAt(0).toUpperCase() +
                  currentResource.slice(1)}
                :
              </p>
              <p className="  text-primary-veryDarkBlue font-bold">
                {originalLength}.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col  w-full border-t-[1px] border-secondary-sand py-6">
          {speeds?.map((speed, index) => (
            <div
              key={index}
              className="lg:min-w-max max-w-max  flex flex-col   gap-2  my-2"
            >
              <SpeedResult data={speed} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
