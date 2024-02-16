import React, { useState, useEffect } from 'react';
import Modal from "../Components/Modal"
  
function Kontakt() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keySequence, setKeySequence] = useState('');
 
  useEffect(() => {
    const handleKeyPress = (e) => {
      setKeySequence((prev) => (prev + e.key).slice(-4));
    };
 
    window.addEventListener('keydown', handleKeyPress);
 
    if (keySequence === '1234') {
      setIsModalOpen(true);
    }
 
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [keySequence]);
 
  return (
    <div className="App">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Tittut!</p>
      </Modal>
    </div>
  );
}
 
export default Kontakt;