import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SideBtn from './SideBtn';
import TypeAnimation from './TypeAnimation';

const Home = () => {
  const [showGreetings, setShowGreetings] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showProfession, setShowProfession] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [blurMainBody, setBlurMainBody] = useState(false); // State for blur effect

  useEffect(() => {
    const greetingsTimeout = setTimeout(() => {
      setShowGreetings(true);
    }, 1000);

    const nameTimeout = setTimeout(() => {
      setShowName(true);
    }, 2000);

    const professionTimeout = setTimeout(() => {
      setShowProfession(true);
    }, 3000);

    const btnTimeout = setTimeout(() => {
      setShowBtn(true);
    }, 4500);

    return () => {
      clearTimeout(greetingsTimeout);
      clearTimeout(nameTimeout);
      clearTimeout(professionTimeout);
      clearTimeout(btnTimeout);
    };
  }, []);

  return (
    <div className='home'>
      <div>
        <div className="navbar">
          <div className='side-btn-box'>
            {/* Pass setBlurMainBody function to SideBtn */}
            <SideBtn setBlurMainBody={setBlurMainBody} />
          </div>
        </div>

        {/* Apply blur effect conditionally based on blurMainBody state */}
        <div className={`main-body ${blurMainBody ? 'blur' : ''}`}>
          <div className="left">
            <div className="details">
              <div>
                {showGreetings && (
                  <p className="greet0">
                    <TypeAnimation text='Hi, I am' />
                  </p>
                )}
                {showName && (
                  <h2>
                    <TypeAnimation text='Khubaib Khan' />
                  </h2>
                )}
                {showProfession && (
                  <h1>
                    <TypeAnimation text='Software Developer' />
                  </h1>
                )}
              </div>
            </div>
            <div className="btn-box">
              <div>
                {showBtn && (
                  <div>
                    {/* Use Link components instead of buttons */}
                    <Link to="/about" className="btn">About Me</Link>
                    <Link to="/projects" className="btn">Projects</Link>
                  </div>
                )}

              </div>
            </div>
          </div>

          <div className="right">
            <div className="my-img"></div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Home;
