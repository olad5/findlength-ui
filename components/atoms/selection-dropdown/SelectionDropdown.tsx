import { useState } from "react";
import SelectionDropDownProps from "./SelectionDropdown.d";

const SelectionDropDown: React.FC<SelectionDropDownProps> = ({
  selection,
  onClick,
  active = true,
}) => {
  const [trigger, setTriggered] = useState(false);

  const handleClick = (event) => {
    if (trigger) {
      return setTriggered(false);
    }
    return setTriggered(true);
  };
  return (
    <div onClick={handleClick}>
      <div className="m-10 px-0 w-full">
        <a
          className="w-full bg-secondary-sand flex items-center px-2 py-2 rounded"
          id="menu-btn"
        >
          <img
            src="/icons/play-btn-fill.svg"
            className="inline-block  mr-2 "
            alt=""
          />
          Video
          <img
            src="/icons/expand_more_fill.svg"
            className="inline-block ml-2"
            alt=""
          />
        </a>
        {trigger ? (
          <div className="w-full bg-secondary-sand  text-center flex flex-col rounded mt-4 p-2 text-sm ">
            <a href="#" className="px-1 py-1 hover:bg-blue-300 rounded">
              Video
            </a>
            <a href="#" className="px-1 py-1 hover:bg-blue-300 rounded">
              Playlist
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SelectionDropDown;
