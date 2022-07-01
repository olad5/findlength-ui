import { SpeedResultProps } from "./SpeedResult.d";

export default function SpeedResult({ data }: SpeedResultProps) {
  return (
    <div className="flex items-center gap-2 ">
      <img src="/icons/timer-secondary.svg" alt=" timer icon" />
      <p className="flex-1">
        At {data.speed.toFixed(2)}x:
        <span className="ml-3 text-lg text-primary-veryDarkBlue font-bold">
          {data.length}.
        </span>
      </p>
    </div>
  );
}
