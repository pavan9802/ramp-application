import React from 'react'
import { useEffect, useState } from 'react';
import script from "./script.png"
function Typewriter({ text, speed }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
      let index = 0;
  
      const interval = setInterval(() => {
        if (index < text.length) {
            const item = <li>{text[index]}</li> 
          setDisplayedText(prevText => [prevText, item])
          index++;
        } else {
        setDisplayedText(prevText => [prevText, <img src={script} alt="Image of script" width="750" height="500"/>])
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, [text, speed]);
  
    return <div>{displayedText}
          
          
        
        </div>;
}

export default Typewriter
