import React from 'react';

export default function header() {
  return (
    <React.Fragment>
      <strong className="instruction__textbox">Instructions:</strong>
      <p className="instruction__textbox">Use the mouse/keyboard to control the drum machine keypad.</p>
      <p className="instruction__textbox">When the mode is set to normal, each key will make a sound once only.</p>
      <p className="instruction__textbox">Click the mode button to switch from normal to loop mode. In this mode pressing any key will start a looping drum sound, with the speed dependant on the position of the tempo slider.</p>
      <p className="instruction__textbox">Loops can be combined, and keys can also be played over the top of any loop. To reset all loops/sounds press the reset button</p>
    </React.Fragment>
  )
};
