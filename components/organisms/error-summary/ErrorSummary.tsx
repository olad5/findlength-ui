import ErrorCheck from "../../molecules/error-check/ErrorCheck";

export function ErrorSummary() {
  let checkMessages = [
    {
      id: 0,
      text: "It's a link from Youtube.",
    },
    {
      id: 1,
      text: 'You selected either "Video" or "Playlist" based on your link source.',
    },
    {
      id: 2,
      text: "One or more characters are missing from your link.",
    },
  ];
  return (
    <div className="flex flex-col  items-center  w-full ">
      <div className="flex  items-center gap-3 mt-10">
        <img src="/icons/timer-error.svg" alt="timer icon" className="w-8" />
        <p className="">Uh-Oh!</p>
      </div>
      <p className="mt-4">kindly check the link you pasted and try again</p>

      <div>
        <p className="text-center mt-10 text-primary-veryDarkBlue font-[800]">
          MAKE SURE:
        </p>

        <div className="flex-1 flex flex-col mt-8 gap-3  ">
          {checkMessages.map((message) => (
            <div key={message.id}>
              <ErrorCheck text={message.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
