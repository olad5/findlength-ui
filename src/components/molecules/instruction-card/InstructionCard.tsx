import { InstructionCardProps } from "./InstructionCard.d";

export default function InstructionCard({ instruction }: InstructionCardProps) {
  return (
    <div className=" flex items-center flex-col gap-5 justify-between    text-center w-[14rem] ">
      <div className=" w-8 h-8 shadow-lg   shadow-secondary-sand  grow rounded-full flex justify-center items-center  ">
        <p>{instruction.id + 1}</p>
      </div>
      <p className="text-primary-veryDarkBlue text-sm text-center">
        {instruction.text}
      </p>
    </div>
  );
}
