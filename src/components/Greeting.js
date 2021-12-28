import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hey Beautiful</h2>
      {!changeText && <Output>Always great to see your face</Output>}
      {changeText && <Output>Change</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
};

export default Greeting;