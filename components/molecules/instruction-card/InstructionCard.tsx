import InstructionCardProps from "./InstructionCard.d";

const InstructionCard: React.FC<InstructionCardProps> = ({ instruction }) => {
  return (
    <div className=" flex items-center flex-col gap-5 justify-between   text-center w-[16rem] ">
      <div className=" w-8 shadow-xl  shadow-secondary-sand  rounded-full ">
        <p>{instruction.id + 1}</p>
      </div>
      <p className="text-primary-veryDarkBlue">{instruction.text}</p>
      <p></p>
    </div>
  );
};

export default InstructionCard;
