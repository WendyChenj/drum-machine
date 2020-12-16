import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';
import drumEles from '../drumEles';

const DrumPads = () => {
  const [drumText, setDrumText] = useState("Welcome to play!");
  
  useEffect(() => {
    document.addEventListener('keydown', pressDrumKey);
  });
  
  const clickPadHandler = (event, drumId) => {
    event.preventDefault();
    document.getElementById(drumId).play();
    setDrumText(`You hit the drum key ${drumId}.`);
  }
  
  let drumCharsArray = drumEles.map( ele => ele.text);
  
  const pressDrumKey = (event) => {
    event.preventDefault();
      
    if (drumCharsArray.includes(event.key.toUpperCase())) {
      document.getElementById(event.key.toUpperCase()).play();
      setDrumText(`You hit the drum key ${event.key.toUpperCase()}.`);
    }
  }

  return (
    <div id="drum-machine" onKeyDown={pressDrumKey}>
      <p id="display">{drumText}</p>
      {drumEles.map( (ele) => <DrumPad drum={ele} padClick={(event) => clickPadHandler(event, ele.text)} />)}
    </div>
  );

}

export default DrumPads;
