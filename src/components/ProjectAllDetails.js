import React, { useState, useEffect, useRef } from 'react';
import projectData from '../data/projectData';
import SideBtn from './SideBtn';
import { useParams } from 'react-router-dom'; 

function ProjectAllDetails() {
  let { id } = useParams(); // Extract id from route params
  
  const [blurProjectsBodyNav, setBlurProjectsBodyNav] = useState(false); // State for blur effect
  const [isPortrait, setIsPortrait] = useState(window.innerWidth / window.innerHeight < 1);
  const [project,setProject] = useState(projectData[0]) 
  console.log(project)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    let cleanedStr = id.replace(/[^0-9]/g, ''); // Remove all non-numeric characters
    const parsedId = parseInt(cleanedStr, 10); // Ensure to parse as base 10
    console.log(parsedId)
    const selectedProject = projectData.find(project => project.id == parsedId);
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [id]);
  
  

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth / window.innerHeight < 1);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && project.img[currentImageIndex].includes('mp4')) {
      videoRef.current.load();
    }
  }, [currentImageIndex, project.img]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.img.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.img.length - 1 : prevIndex - 1
    );
  };

  const navbarStyle = {
    width: '100%',
    minHeight: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '-5vh',
    
};

const sideBtnBoxStyle = {
  overflow: 'hidden',
  height: '100%',
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

  const projectDetailsStyle = {
    padding: '1.2rem',
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: isPortrait ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const pleftStyle = {
    order: isPortrait ? 1 : 'initial',
    width: isPortrait ? '95%' : '45%',
    height: isPortrait ? '45%' : '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const prightStyle = {
    order: isPortrait ? 2 : 'initial',
    width: isPortrait ? '95%' : '50%',
    height: isPortrait ? '52%' : '90%',
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    textAlign: 'left',
    overflow: 'auto',
    maxHeight: '800px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    flexDirection: 'column',
    padding: '1rem',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1,
    fontSize: '3pc',
    borderRadius: '50%',
  };

  const leftArrowStyle = {
    ...arrowStyle,
    left: '0',
  };

  const rightArrowStyle = {
    ...arrowStyle,
    right: '0',
  };

  return (
    <div className='projectsDetailView'>
      <div >
        <div style={{width:'100%'}}>
        <div style={navbarStyle}>
          <h1 style={titleStyle}>{project.name}</h1>
          <div style={sideBtnBoxStyle}>
            <SideBtn setBlurMainBody={setBlurProjectsBodyNav} />
          </div>
        </div>
        </div>
        
        {!blurProjectsBodyNav && (
          <div style={projectDetailsStyle} className='projectDetailBody'>
            <div style={pleftStyle} className='pleft'>
              <button style={leftArrowStyle} onClick={handlePrevImage}>&#8592;</button>
              {project.img[currentImageIndex].includes('mp4') ? (
                <video ref={videoRef} key={project.img[currentImageIndex]} src={project.img[currentImageIndex]} style={{ width: '100%', height: '100%' }} controls />
              ) : (
                <img src={project.img[currentImageIndex]} style={{ width: '100%', height: '100%' }} alt="" />
              )}
              <button style={rightArrowStyle} onClick={handleNextImage}>&#8594;</button>
            </div>
            <div style={prightStyle} className='pright'>
              <div>
                <h5 style={{ fontSize: isPortrait ? '1rem' : '1.25rem' }}>Description:</h5>
                <p style={{ fontSize: isPortrait ? '0.9rem' : '1rem' }}>{project.description}</p>
                <br />
                <h5 style={{ fontSize: isPortrait ? '1rem' : '1.25rem' }}>Technologies: </h5>
                <p style={{ fontSize: isPortrait ? '0.9rem' : '1rem' }}>{project.technologies}</p>
                <br />
                <h5 style={{ fontSize: isPortrait ? '1rem' : '1.25rem' }}>GitHUB Link:</h5>
                <a href={project.github} target="_blank" style={{ textDecoration: 'none', color: 'black', fontSize: isPortrait ? '0.9rem' : '1rem' }}>
                  {project.github}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectAllDetails;
