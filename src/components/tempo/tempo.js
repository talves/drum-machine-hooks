import React, { useState } from 'react';
import Slider from './slider'

import '../../styles/tempo.css';

const DEFAULTS = { min: 30, max: 240, step: 10, defaultValue: 60 }

function Tempo({ action }) {
  const [tempoTitle, setTempoTitle] = useState(`Tempo (${DEFAULTS.defaultValue})`)

  function handleChange(value) {
    setTempoTitle(`Tempo (${value})`)
    if (typeof action === 'function') action(value)
  }

  return (
    <div className="tempo__container">
      <Slider onChange={handleChange} {...DEFAULTS} />
      <label className="tempo__label" htmlFor="tempo">{tempoTitle}</label>
    </div>
  );
}

export default Tempo
