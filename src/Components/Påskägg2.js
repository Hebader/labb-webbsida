import React, { useEffect, useState } from "react";
import "./Påskägg2.css";

const Påskägg2 = () => {
    const [color, setColor] = useState("#877676b7");
    const [backgroundChanged, setBackgroundChanged] = useState(false);

    const handleEasterEggClick = () => {
        setBackgroundChanged(!backgroundChanged);
        setColor("red"); 
      };
    
      useEffect(() => {
        document.body.style.backgroundColor = color;
      }, [color]);

      
  return (
    <div className={`App ${backgroundChanged ? 'changed-background' : ''}`}>
      <div
        className="easter-egg"
        onClick={handleEasterEggClick}
      ></div>
    
      
    </div>
  );
};

export default Påskägg2;