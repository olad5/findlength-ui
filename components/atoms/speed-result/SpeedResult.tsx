import SpeedResultProps from "./SpeedResult.d";

const SpeedResult: React.FC<SpeedResultProps> = ({ data }) => {
  return (
    <div className="flex items-center gap-2 ">
      <img src="/icons/timer_black_fill.svg" alt=" timer icon" />
      <p className="flex-1">
        At {data.speed}x:
        <span className="ml-3 text-lg text-primary-veryDarkBlue">
          {data.length}.
        </span>
      </p>
    </div>
  );
};

export default SpeedResult;
