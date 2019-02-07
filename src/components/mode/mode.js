import React, { useState, useEffect } from 'react';
import '../../styles/switch.css';

function Mode({ action, loop = false }) {
  const [looping, setLooping] = useState(loop)
  const onClick = () => {
    setLooping(!looping)
  }
  useEffect(() => {
    console.log('changing looping', looping)
    if (typeof action === 'function') action(looping)
    document.title = `${looping ? 'Loop' : 'Normal'} - Drum Machine`
  }, [looping])


  return (
    <div className="mode__container">
      <button className="mode__button" onClick={onClick}>{looping ? 'Loop' : 'Normal'}</button>
    </div>
  )
}

export default Mode;
