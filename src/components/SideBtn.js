import React, { useState } from 'react';
import SideBtnPopUp from './SideBtnPopUp';

function SideBtn({ setBlurMainBody }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
    setBlurMainBody(!showPopUp); // Toggle blur effect
  };

  return (
    <button className='side-btn' onClick={togglePopUp}>
      <div>
      <span >&#9776;</span>
        {showPopUp && <SideBtnPopUp />}
      </div>
    </button>
  );
}

export default SideBtn;
