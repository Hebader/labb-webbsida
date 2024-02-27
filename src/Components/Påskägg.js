import React, { useEffect, useState } from "react";
import "./Påskägg.css";
 
const Påskägg = () => {
  const [showModal, setShowModal] = useState(false);
  const [konamiCode, setKonamiCode] = useState('');
 
  const handleKeyPress = (event) => {
    setKonamiCode((prev) => prev + event.key);
  };
 
  useEffect(() => {
    console.log('Konami Code:', konamiCode);
 
    if (konamiCode.includes('1337')) {
      console.log('Konami Code activated!');
      setShowModal(true);
      setKonamiCode('');
    }
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [konamiCode]);
 
  return (
    showModal && (
      <div className="modal" onClick={() => setShowModal(false)}>
        <div className="modal-content">
          <p>Tittut!</p>
        </div>
      </div>
    )
  );
};
 
export default Påskägg;