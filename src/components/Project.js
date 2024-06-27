import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Project({ data }) {

  const cardStyle = {
    width: '18rem',
    margin: '1vw',
    borderRadius: '3pc',
    backdropFilter: 'blur(2px)',
    backgroundColor: 'rgba(199, 188, 188, 0.514)',
    border: '1px solid rgba(255, 254, 254, 0.685)',
    boxShadow: '0 8px 32px 0 rgba(211, 213, 245, 0.15)',
    opacity: '2',
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
      <Card.Img variant="top" src={`/img/p${data.id}i0.jpeg`} style={imgStyle} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text style={textStyle}>
          I have developed a project using {data.technologies}
        </Card.Text>
        {/* Use Link component to navigate to project details */}
        <Link to={`/projects/:${data.id}`} style={buttonStyle}>
          View IT
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Project;
