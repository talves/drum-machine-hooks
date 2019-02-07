import React from 'react'
import '../../styles/switch.css'

function Reset({ action }) {
  const onClick = (e) => {
    if (typeof action === 'function') action()
  }

  return (
    <div className="reset__container">
      <button className="reset__button" onClick={onClick}>Reset</button>
    </div>
  )
}

export default Reset;
