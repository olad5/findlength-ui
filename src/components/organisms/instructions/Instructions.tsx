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
      text: "Get the calculated length at different playback speed.",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center content-center ">
        {instructions.map((instruction) => (
          <div key={instruction.id}>
            <InstructionCard instruction={instruction} />
          </div>
        ))}
      </div>
    </>
  );
}
