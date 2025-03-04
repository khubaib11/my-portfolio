import React, { useEffect, useState } from 'react';
import SideBtn from './SideBtn';
import Course from './Course';
import courseData from '../data/courseData.json';

function Courses() {
    const [blurProjectsBodyNav, setBlurProjectsBodyNav] = useState(false); // State for blur effect
    const [blurProjectsBody, setBlurProjectsBody] = useState(false);
    const [blurprojectstyle,setBlurprojectstyle] = useState({ overflow: 'auto', maxHeight: '800px', scrollbarWidth: 'none', '-ms-overflow-style': 'none' })

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
  

    useEffect(() => {
        if(blurProjectsBodyNav||blurProjectsBody){
            setBlurprojectstyle({})
        }else{
            setBlurprojectstyle({ overflow: 'auto', maxHeight: '800px', scrollbarWidth: 'none', '-ms-overflow-style': 'none' })
        }
        
    },[blurProjectsBodyNav,blurProjectsBody]);
    return (
        <div >
            
            <div className={`projects `} style={blurprojectstyle} >
            <div style={navbarStyle}>
                    <h1 style={titleStyle}>Courses</h1>
                    <div style={sideBtnBoxStyle}>
                        <SideBtn setBlurMainBody={setBlurProjectsBodyNav} />
                    </div>
                </div>
            {/* { blurProjectsBody && <ProjectAllDetails id={id} setBlurMainBody={setBlurProjectsBody} />} */}
                <div className={`render-projects ${blurProjectsBody || blurProjectsBodyNav ? 'blur' : ''}`}>
                {
                    courseData.map((project)=>(
                        <Course key={project.id} data={project}  />
                    ))
                }

                </div>    
                
            </div>
        </div>
    );
}

export default Courses;
