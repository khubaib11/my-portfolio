import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SideBtnPopUp() {
  const sideBtnPopUpStyle = {
    // display: 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',  
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: '1px solid #cccccc',
    padding: '10px',
    fontSize: '18px',
    borderRadius: '4pc',
    zIndex: '2',
  };
  

  const ulStyle = {
    padding: '0px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '15px',
    alignItems: 'center',
    //remove dots from list
    listStyleType: 'none',
  };

  const liStyle = {
    listStyle: 'none',
    width: '130px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '4pc',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(8px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'box-shadow 0.3s, transform 0.3s',
    textDecoration: 'none',
    color: 'black',
  };

  // Function to toggle visibility of popup based on window size
  const togglePopupVisibility = () => {
    const sideBtnPopUp = document.querySelector('.SideBtnPopUp');
    if (sideBtnPopUp) {
      const rect = sideBtnPopUp.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      ) {
        sideBtnPopUp.style.display = 'block';
      } else {
        sideBtnPopUp.style.display = 'none';
      }
    }
  };

  window.addEventListener('resize', togglePopupVisibility);

  React.useEffect(() => {
    togglePopupVisibility();
    return () => window.removeEventListener('resize', togglePopupVisibility);
  }, []);

  return (
    <div style={sideBtnPopUpStyle} className='SideBtnPopUp'>
      <ul style={ulStyle}>
        <li><Link to="/" style={liStyle}>Home</Link> </li>
        <li> <Link to="/about" style={liStyle}>About Me</Link> </li>
        <li> <Link to="/projects" style={liStyle}>Projects</Link> </li>
        <li> <Link to="/courses" style={liStyle}>Courses</Link> </li>
        <li> <Link to="/contact" style={liStyle}>Contact Me</Link> </li>
      </ul>
    </div>
  );
}

export default SideBtnPopUp;
