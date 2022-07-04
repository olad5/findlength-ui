import InstructionCard from "../../molecules/instruction-card/InstructionCard";

export default function Instruction() {
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

  return (
    <div>
      <h3 className="text-center text-primary-veryDarkBlue text-lg  font-medium relative flex mx-auto justify-center items-center  w-1/5  mb-4">
        How it works
        <img
          src="/icons/how-it-works.svg"
          alt="how it works crown"
          className="w-24 absolute inline"
        />
      </h3>
      <div className="flex justify-between items-center content-center ">
        {instructions.map((instruction) => (
          <div key={instruction.id}>
            <InstructionCard instruction={instruction} />
          </div>
        ))}
      </div>
    </div>
  );
}
