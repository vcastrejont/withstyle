import React from "react";
import "../style/style.scss";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";

const App = () => {
  return (
    <div className="grid admin">
      <Header />
      <Aside />
      <Main />
    </div>
  );
};

export default App;
