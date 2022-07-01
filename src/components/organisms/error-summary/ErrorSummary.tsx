import ErrorCheck from "../../molecules/error-check/ErrorCheck";

const checkMessages = [
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
    text: "One or more alphabets, numbers, or symbol isn’t missing from your link.",
  },
];

export function ErrorSummary() {
  return (
    <div className="flex flex-col  items-center  w-full shadow-[0px_3px_12px_0.1px] shadow-secondary-sand p-4">
      <div className="flex  gap-2 mb-5  w-full">
        <img
          src="/icons/timer-error.svg"
          alt="timer icon"
          className="w-10  ml-[-7px]"
        />
        <div className="flex flex-col    text-red-500 font-bold">
          <p className="">Oops!</p>
          <p className="font-bold">
            Kindly check the link you pasted and try again.
          </p>
        </div>
      </div>

      <div>
        <hr className=" w-full border-t-1 border-secondary-sand  " />
        <div className="flex mt-5 items-center gap-2 ">
          <img src="/icons/Subtract.svg" alt="timer icon" className="w-6" />
          <h4 className="  text-primary-veryDarkBlue font-medium">
            Quick checklist.
          </h4>
        </div>

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
