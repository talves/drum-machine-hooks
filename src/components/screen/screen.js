import React from 'react';
import '../../styles/screen.css';

function Screen({ display }) {
  // const [power, setPower] = useState('off')

  return (
    <div className='screen__container'>
      <p className='screen__output'>{display}</p>
    </div>
  )
}

export default Screen
