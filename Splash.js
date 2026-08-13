import React, { useEffect } from "react";

function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 6000); 

    return () => clearTimeout(timer);
  }, [onFinish]);
  

  return (
    <div className="splash">
      <h1>I N I T I A L I Z I N G . . .</h1>
    </div>
  );
}

export default Splash;
