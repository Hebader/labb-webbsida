import React, { useEffect, useState } from "react";
import "./Påskägg.css";

const Påskägg = () => {
  const [color, setColor] = useState("#877676b7;");
  const [backgroundChanged, setBackgroundChanged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [konamiCode, setKonamiCode] = useState('');


  const handleKeyPress = (e) => {
    setKonamiCode((prevCode) => prevCode + e.key);
  };

  useEffect(() => {
    
    window.addEventListener('keydown', handleKeyPress);

    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    // Check if the Konami Code is entered
    if (konamiCode.includes('1337')) {
      setShowModal(true);
      setKonamiCode(''); // Reset the code after activation
    }
  }, [konamiCode]);

  const handleEasterEggClick = () => {
    setBackgroundChanged(!backgroundChanged);
    setColor("red"); 
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return(
  <div className={`App ${backgroundChanged ? 'changed-background' : ''}`}>
       
    <div
        className="easter-egg"
        onClick={handleEasterEggClick}
      ></div>

      <div>
      <div>
      {/* Area for the second Easter egg */}
   

      {/* Modal popup displayed when the Konami Code is entered */}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <p>Tittut!</p>
        </div>
      )}
    </div>
      </div>
  </div>
  );
  
}




  
export default Påskägg;