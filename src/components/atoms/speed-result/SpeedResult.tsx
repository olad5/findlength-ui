import { SpeedResultProps } from "./SpeedResult.d";

export default function SpeedResult({ data }: SpeedResultProps) {
  return (
    <div className="flex items-center gap-2 text-[.8rem] leading-[1rem] lg:text-lg ">
      <img
        src="/icons/timer-secondary.svg"
        alt=" timer icon"
        className="w-4 lg:w-6"
      />
      <p className="flex-1">
        At {data.speed.toFixed(2)}x:
        <span className=" ml-1 lg:ml-3  text-primary-veryDarkBlue font-bold">
          {data.length}.
        </span>
      </p>
    </div>
  );
}
