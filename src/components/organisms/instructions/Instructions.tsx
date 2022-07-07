import InstructionCard from "../../molecules/instruction-card/InstructionCard";

const instructions = [
  {
    id: 0,
    text: " Copy link from any YouTube video or playlist.",
  },
  {
    id: 1,
    text: 'Select "Video" or "Playlist" Paste link in the search bar.',
  },
  {
    id: 2,
    text: "Click “Get length” to see results at different playback speed.",
  },
];

export default function Instruction() {
  return (
    <div>
      <h3 className="text-center text-primary-veryDarkBlue text-lg  font-medium relative flex mx-auto justify-center items-center  xl:w-1/5  mb-6 xl:mb-4">
        How it works
        <img
          src="/icons/how-it-works.svg"
          alt="how it works crown"
          className="w-24 absolute inline"
        />
      </h3>
      <div className="flex flex-col xl:flex-row justify-between items-center content-center ">
        {instructions.map((instruction) => (
          <div key={instruction.id}>
            <InstructionCard instruction={instruction} />
          </div>
        ))}
      </div>
    </div>
  );
}
