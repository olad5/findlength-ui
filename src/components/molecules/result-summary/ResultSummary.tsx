import { useState } from "react";
import { useAppContext } from "../../../../context/AppContext";
import SpeedResult from "../../atoms/speed-result/SpeedResult";
import { ResultSummaryProps } from "./ResultSummary.d";

export default function ResultSummary({
  originalLength,
  speeds,
}: ResultSummaryProps) {
  const [state, dispatch] = useAppContext();
  const [currentResource, setCurrentResource] = useState<string>(
    state.resource
  );

  return (
    <div className="flex flex-col gap-4  items-center mt-3 w-full h-full">
      <div className="flex  items-center gap-4">
        <img src="/icons/timer-primary.svg" alt="timer icon" />
        <p className="">
          Total length of the{" "}
          {currentResource.charAt(0).toUpperCase() + currentResource.slice(1)}:
          <span className="ml-3 text-lg text-primary-veryDarkBlue">
            {originalLength}.
          </span>
        </p>
      </div>
      <div className="flex-1 flex flex-col  ">
        {speeds?.map((speed, index) => (
          <div key={index} className="min-w-max  flex flex-col   gap-2  my-2">
            <SpeedResult data={speed} />
          </div>
        ))}
      </div>
    </div>
  );
}
