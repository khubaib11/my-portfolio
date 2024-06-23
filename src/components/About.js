import React, { useState, useEffect } from 'react';
import SideBtn from './SideBtn';

function About() {
  const boxStyle = {
    borderRadius: '3pc',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    width: '43vw',
    padding: '2vh 2vw',
    minHeight: '12vh',
    overflow: 'hidden',
    marginBottom: '6vh',
    fontSize: '1.8vh',
    marginLeft: '-1vw',
  };

  const navbarStyle = {
    width: '100%',
    minHeight: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5vh',
  };

  const sideBtnBoxStyle = {
    overflow: 'hidden',
    height: '80%',
    width: '6vw',
    minWidth: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  };

  const titleStyle = {
    flexGrow: 1,
    textAlign: 'center',
  };

  const [blurMainBody, setBlurMainBody] = useState(false); // State for blur effect
  const [blurProjectsBodyNav, setBlurProjectsBodyNav] = useState(false);
  const [blurProjectsBody, setBlurProjectsBody] = useState(false);
  const [blurprojectstyle, setBlurprojectstyle] = useState({
    overflow: 'auto',
    maxHeight: '800px',
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  });

  useEffect(() => {
    if (blurProjectsBodyNav || blurProjectsBody) {
      setBlurprojectstyle({});
    } else {
      setBlurprojectstyle({
        overflow: 'auto',
        maxHeight: '900px',
        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none',
        padding: '5vw',
        paddingBottom: '2rem',
      });
    }
  }, [blurProjectsBodyNav, blurProjectsBody]);

  return (
    <div className='aboutMe' style={blurprojectstyle}>
      <div style={navbarStyle}>
        <h1 style={titleStyle}>About ME</h1>
        <div style={sideBtnBoxStyle}>
          <SideBtn setBlurMainBody={setBlurMainBody} />
        </div>
      </div>

      <div style={{ marginLeft: '0', textAlign: 'left' }} className={`main-body ${blurMainBody ? 'blur' : ''}`}>
        <h2 style={{ marginBottom: '4vh' }}>BIO</h2>
        <div style={boxStyle} className='boxInfo'>
          <p style={{ marginTop: '2vh' }}>
            I am a Bachelor of Science in Computer Science (BSCS) student with a strong foundation in mathematics and programming. My expertise includes developing web applications using JavaScript, Node.js, and React. I am also proficient in Python and have experience building machine learning models. Currently, I am working on my final project, which involves developing a large language model (LLM).
            <br />
            I am a quick learner, continuously seeking to expand my knowledge and skills in emerging technologies. I am passionate about software engineering and am eager to apply my abilities to build and develop innovative web applications. I am looking for a full-time position as a software engineer where I can leverage my expertise to contribute to dynamic and challenging projects.
          </p>
        </div>

        <br />

        <h2 style={{ marginBottom: '4vh' }}>EDUCATION</h2>
        <div style={boxStyle} className='boxInfo'>
          <h5 style={{ marginTop: '1rem' }}>Bachelor of Computer Science</h5>
          <p style={{ fontSize: '1rem' }}>Sukkur IBA</p>
          <p style={{ fontSize: '0.7rem', marginTop: '-1vh' }}>2021 - Present</p>

        </div>

        <br />

        <h2 style={{ marginBottom: '4vh' }}>Experience</h2>
        <div style={boxStyle} className='boxInfo'>
          <h5 style={{ marginTop: '1rem' }}>DataScraper Internship</h5>
          <p style={{ fontSize: '1rem' }}>Hello World Technologies | RYK</p>
          <p style={{ fontSize: '0.7rem', marginTop: '-1vh' }}>June 2023 - August 2023</p>

        </div>

        <br />

        <h2 style={{ marginBottom: '4vh' }}>Area Of Interest</h2>
        <div style={boxStyle} className='boxInfo'>
          <p style={{ marginTop: '2vh', fontSize: '1.2rem' }}>
            . Web Development <br />
            . Artificial Intelligence <br />
            . Large Language Models <br />
          </p>
        </div>

        <br />

        <h2 style={{ marginBottom: '4vh' }}>Skills</h2>
        <div style={boxStyle} className='boxInfo'>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <p style={{ marginTop: '2vh', fontSize: '1.2rem' }}>
                . React <br />
                . Express <br />
                . Numpy <br />
              </p>
            </div>
            <div>
              <p style={{ marginTop: '2vh', fontSize: '1.2rem' }}>
                . NodeJS <br />
                . MongoDB <br />
                . SKlearn <br />
              </p>
            </div>
            <div>
              <p style={{ marginTop: '2vh', fontSize: '1.2rem' }}>
                . Git/Github <br />
                . HTML/CSS <br />
                . Pandas <br />
              </p>
            </div>
          </div>
        </div>

        <br />

        <h2 style={{ marginBottom: '4vh' }}>Programming Languages</h2>
        <div style={boxStyle} className='boxInfo'>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <p style={{ marginTop: '2vh', fontSize: '1.2rem' }}>
                . JavaScript <br />
              </p>
            </div>
            <div>
              <p style={{ marginTop: '2vh', fontSize: '1.2rem' }}>
                . Java <br />
              </p>
            </div>
            <div>
              <p style={{ marginTop: '2vh', fontSize: '1.2rem' }}>
                . Python <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
