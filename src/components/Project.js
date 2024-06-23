import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Project({ setBlurMainBody,data,setId }) {

  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
    setBlurMainBody(!showPopUp); // Toggle blur effect
    setId(data.id);
  };

  const cardStyle = {
    width: '18rem',
    margin: '1vw',
    borderRadius: '3pc',
    backdropFilter: 'blur(2px)',
    backgroundColor: 'rgba(199, 188, 188, 0.514)',
    border: '1px solid rgba(255, 254, 254, 0.685)',
    boxShadow: '0 8px 32px 0 rgba(211, 213, 245, 0.15)',
    opacity: '2 ',
    minHeight: '24rem',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderTopLeftRadius: 'calc(3pc - 1px)',
    borderTopRightRadius: 'calc(3pc - 1px)',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'black',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  };

  const textStyle = {
    textShadow: '0 0 0px rgba(255, 255, 255, 0.5), 0 0 1px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5)',
    color: 'black',
  };


  return (

    <Card style={cardStyle}>
      <Card.Img variant="top" src='/img/bk3.jpeg' style={imgStyle} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text style={textStyle}>I have developed a project using    
          {data.technologies}
        </Card.Text>
        <Button style={buttonStyle} onClick={togglePopUp} >View IT </Button>
      </Card.Body>
    </Card>


  );
}

export default Project;
