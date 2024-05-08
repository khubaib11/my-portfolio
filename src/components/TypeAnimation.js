import React, { useState, useEffect } from 'react';

function TypeAnimation(props) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const text = props.text;
    let currentIndex = 0;

    const typingEffect = setInterval(() => {
      setTypedText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, [props.text]);

  return <span>{typedText}</span>; 
}

export default TypeAnimation;
