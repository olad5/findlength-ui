import SpeedResult from "../../atoms/speed-result/SpeedResult";
import { ResultSummaryProps } from "./ResultSummary.d";

const ResultSummary: React.FC<ResultSummaryProps> = ({
  originalLength,
  speeds,
}) => {
  return (
    <div className="flex flex-col  items-center mt-3 w-full h-full">
      <div className="flex  items-center gap-4">
        <img src="/icons/timer_black_fill.svg" alt="timer icon" />
        <p className="">
          Total length of the playlist:
          <span className="ml-3 text-lg text-primary-veryDarkBlue">
            {originalLength}.
          </span>
        </p>
      </div>
      <div className="flex-1 flex flex-col  ">
        {speeds?.map((speed, index) => (
          <div key={index} className="w-[22rem]  flex flex-col gap-2  m-auto">
            <SpeedResult data={speed} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultSummary;
