import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@tailwindui/react";
import { useAppContext } from "../../../context/AppContext";

export default function SelectionDropDown() {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useAppContext();
  const [currentResource, setCurrentResource] = useState<"video" | "playlist">(
    state.resource
  );
  const container = useRef(null);

  function handleResourceSelection(e: React.MouseEvent<HTMLAnchorElement>) {
    let clicked = e.currentTarget.text.toLowerCase() as "video" | "playlist";
    setCurrentResource(clicked);
    dispatch({ type: "resource_changed", value: clicked });
    setShow(false);
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!container.current.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!show) return;

      if (event.key === "Escape") {
        setShow(false);
      }
    };

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [show]);

  return (
    <div ref={container} className="relative h-full w-full ">
      <button
        className="menu focus:outline-none focus:shadow-solid  w-full h-full"
        onClick={() => setShow(!show)}
      >
        <div className="relative w-full h-full  bg-secondary-sand flex items-center justify-between px-2   py-2  ">
          <img
            src="/icons/play-btn-fill.svg"
            className="inline-block  mr-2  text-primary-veryDarkBlue"
            alt=""
          />
          {currentResource.charAt(0).toUpperCase() + currentResource.slice(1)}
          {!show ? (
            <img
              src="/icons/expand_more_fill.svg"
              className="inline-block ml-2"
              alt=""
            />
          ) : (
            <img
              src="/icons/expand_more_fill.svg"
              className="inline-block rotate-180"
              alt=""
            />
          )}
        </div>
      </button>

      <Transition
        show={show}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 w-32 py-2 mt-3 bg-secondary-sand rounded shadow-2xl  ">
          <a
            className="block px-4 py-2 hover:bg-primary-veryDarkBlue hover:text-green-100"
            onClick={handleResourceSelection}
          >
            Video
          </a>
          <a
            className="block px-4 py-2 hover:bg-primary-veryDarkBlue hover:text-green-100"
            onClick={handleResourceSelection}
          >
            Playlist
          </a>
        </div>
      </Transition>
    </div>
  );
}
