import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hey Beautiful</h2>
      {!changeText && <p>Always great to see your face</p>}
      {changeText && <p>Change</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
};

export default Greeting;