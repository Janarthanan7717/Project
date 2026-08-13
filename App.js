import React, { useState } from "react";
import "./App.css";

import Ne from "./com/Ne";
import New from "./com/New";
import Profile from "./com/Profile";
import Tec from "./com/Tec";
import Experience from "./com/Experience";
import Proj from "./com/Proj";
import Certifications from "./com/Certifications";
import Edu from "./com/Edu";
import Con from "./com/Con";
import Splash from "./com/Splash";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      <Ne />
      <New />
      <Profile />
      <Tec />
      <Experience />
      <Proj />
      <Certifications />
      <Edu />
      <Con />
    </>
  );
}

export default App;