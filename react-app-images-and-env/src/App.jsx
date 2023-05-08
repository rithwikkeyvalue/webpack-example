import React from "react";

import Name from "./components/Name";


function App () {
  console.log(process.env.TEST);
  return (
    <div>
      React

      <Name />
      <div>
      {process.env.TEST}
      </div>

      <img src={'images/image.jpg'} alt="nope" width={200} />
    </div>
  )
};

export default App;