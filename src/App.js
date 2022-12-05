import React, { useState } from "react";
import Logo from "./logo.png";
import "./App.css";


const App = () => {
  const [Loader, LoaderHandler] = useState(null);

  const startLoader = async () => {
    const { Grid } = await import("react-loader-spinner");

    LoaderHandler(<Grid color="#4F66D0" />);

    setTimeout(() => {
      LoaderHandler(null);
    }, 5000);
  };

  return (
    <div id="app">
      <img src={Logo} alt="" />
      <h1>Hello!</h1>
      <h2>Unbox your Webpack!</h2>
      <button onClick={startLoader}>Start loader</button>
      {Loader ? Loader : null}
    </div>
  );
};

export default App;