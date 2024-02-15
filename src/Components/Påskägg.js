import React, { useEffect, useState } from "react";
import "./Påskägg.css";

const Påskägg = () => {
  const [color, setColor] = useState("#877676b7");
  const [backgroundChanged, setBackgroundChanged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [konamiCode, setKonamiCode] = useState('');

  const handleKeyPress = (e) => {
    setKonamiCode((prevCode) => prevCode + e.key);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); 

  useEffect(() => {
    if (konamiCode.includes('1337')) {
      setShowModal(true);
      setKonamiCode(''); 
    }
  }, [konamiCode]);

  const handleEasterEggClick = () => {
    setBackgroundChanged(!backgroundChanged);
    setColor("red"); 
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className={`APP ${backgroundChanged ? 'changed-background' : ''}`}>
      <div
        className="easter-egg"
        onClick={handleEasterEggClick}
      ></div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <p>Tittut!</p>
        </div>
      )}
    </div>
  );
};

export default Påskägg;