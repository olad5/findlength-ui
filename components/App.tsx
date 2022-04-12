import { useState } from "react";
import { getVideoInfo } from "../services/InfoServices";

function App() {
  const [textInput, setTextInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.currentTarget.value);
  };

  function getAllInfo(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    getVideoInfo(textInput).then((info) => {
      console.log(info);
    });
  }

  return (
    <>
      <div>
        <div className="">
          <form action="" className="">
            <div className="">
              <input
                type="text"
                placeholder="Enter link"
                className=""
                onChange={handleChange}
              />
            </div>
            <div className="">
              <button onClick={getAllInfo}>Get video</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
