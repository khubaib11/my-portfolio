import React, { useState } from 'react';
import Project from './Project';
import SideBtn from './SideBtn';

function Projects() {
    const [blurProjectsBody, setBlurProjectsBody] = useState(false); // State for blur effect

    const navbarStyle = {
        width: '100%',
        height: '10%',
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


    return (
        <div>
            
            <div className={`projects `} style={{ overflow: 'auto', maxHeight: '800px', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
            <div style={navbarStyle}>
                    <h1 style={titleStyle}>Projects</h1>
                    <div style={sideBtnBoxStyle}>
                        <SideBtn setBlurMainBody={setBlurProjectsBody} />
                    </div>
                </div>

                <div className={`render-projects ${blurProjectsBody ? 'blur' : ''}`}>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project /> 
                </div>    
                
            </div>
        </div>
    );
}

export default Projects;
