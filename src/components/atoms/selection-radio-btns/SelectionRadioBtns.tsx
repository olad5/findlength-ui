import { useState } from "react";
import { useAppContext } from "../../../../context/AppContext";
import { ResourceType, ActionType } from "../../../../types/types.d";

export default function SelectionRadioBtns({}) {
  const [state, dispatch] = useAppContext();
  const [currentResource, setCurrentResource] = useState(state.resource);

  function handleClick(resource: ResourceType) {
    setCurrentResource(resource);
    dispatch({ type: ActionType.RESOURCE_CHANGED, value: resource });
  }

  return (
    <div className="w-full h-full flex">
      <div
        className="radio-btns  flex w-full justify-between  "
        role="radiogroup"
      >
        <button
          className="video-radio-btn flex  items-center"
          onClick={() => handleClick(ResourceType.VIDEO)}
        >
          <div className="radio-btn w-[1.1rem] h-[1.1rem] border-3  bg-secondary-sand rounded-full flex justify-center items-center mr-2 ">
            {currentResource == ResourceType.VIDEO ? (
              <input className="w-[.9rem] h-[.9rem] border-4  border-white bg-secondary-sand rounded-full" />
            ) : (
              <div className="w-[.8rem] h-[.8rem] border-4 border-white bg-white rounded-full"></div>
            )}
          </div>
          <label className="text-xl text-primary-veryDarkBlue font-medium">
            {" "}
            Video
          </label>
        </button>
        <button
          className="playlist-radio-btn flex  items-center"
          onClick={() => handleClick(ResourceType.PLAYLIST)}
        >
          <div className="radio-btn w-[1.1rem] h-[1.1rem] border-3  bg-secondary-sand rounded-full flex justify-center items-center mr-2 ">
            {currentResource == ResourceType.PLAYLIST ? (
              <input className="w-[.9rem] h-[.9rem] border-4  border-white bg-secondary-sand rounded-full" />
            ) : (
              <div className="w-[.8rem] h-[.8rem] border-4  border-white bg-white rounded-full"></div>
            )}
          </div>
          <label className="text-xl text-primary-veryDarkBlue font-medium">
            Playlist
          </label>
        </button>
      </div>
    </div>
  );
}
