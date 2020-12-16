import React from 'react';
import './DrumPad.scss';

const DrumPad = ({ drum, padClick }) => {
  const buttonId = `drum-pad-${drum.text}`;

  return (
    <button 
      class="drum-pad" 
      id={buttonId} 
      onClick={(event) => padClick(event, drum.text)}
     >
      <audio src={drum.audioURL} class="clip" id={drum.text} />
      {drum.text}
    </button>
  );
}

export default DrumPad;