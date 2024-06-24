import React, { useRef, useState, useEffect } from 'react';
import SideBtn from './SideBtn';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
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

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wmtxw1e', 'template_qw281zz', form.current, '5w0ze74NAWLcqLYL7')
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginTop: '1em',
    fontWeight: 'bold',
  };

  const inputStyle = {
    marginTop: '0.5em',
    padding: '1em',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1em',
    borderRadius: '4rem',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    maxWidth: '30rem',
  };

  const submitButtonStyle = {
    marginTop: '1.5em',
    maxWidth: '10rem',
    minWidth: '8rem',
    marginLeft: '3em',
    marginBottom: '1em',
    borderRadius: '3pc',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: ' 0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    cursor: 'pointer',
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const successMessageStyle = {
    marginTop: '1em',
    color: 'green',
    fontWeight: 'bold',
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1em',
  };

  const iconStyle = {
    color: '#333',
    fontSize: '2em',
    transition: 'color 0.3s',
  };

  return (
    <div className="contactMe" style={blurprojectstyle}>
      <div style={navbarStyle}>
        <h1 style={titleStyle}>Contact ME</h1>
        <div style={sideBtnBoxStyle}>
          <SideBtn setBlurMainBody={setBlurMainBody} />
        </div>
      </div>

      <div style={{ marginLeft: '0', textAlign: 'left' }} className={`main-body ${blurMainBody ? 'blur' : ''}`}>
        <h2>Write me a message</h2>

        <p>Email: khankhubaib089@gmail.com</p>
        <form ref={form} onSubmit={sendEmail} style={formStyle}>
          <label style={labelStyle}>Your Name</label>
          <input
            className='emailInputField'
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <label style={labelStyle}>Your Email</label>
          <input
            className='emailInputField'
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <label style={labelStyle}>Message</label>
          <textarea
            className='emailMessage'
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            className='emailInputField'
            type="submit"
            value="Send"
            style={submitButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
          />
        </form>
        {isSubmitted && <div style={successMessageStyle}>Email sent successfully!</div>}
        <br />
        <br />
        <br />
        <div className='allSocialNetwork' style={socialIconsStyle}>
          <a href="https://github.com/khubaib11" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/khubaib-munawar-khan/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
          </a>
        </div>
      </div>
    </div>
  );
}


export default Contact;
