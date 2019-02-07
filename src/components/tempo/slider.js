import React, { useState, useEffect } from 'react'

const ARROW_ACTIONS = ['ArrowRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft']

function Slider({ onChange, min, max, step, defaultValue }) {
  const [minimum, setMinimum] = useState(min)
  const [maximum, setMaximum] = useState(max)
  const [stepping, setStepping] = useState(step)

  useEffect(() => {
    setMinimum(min)
  }, [min])
  useEffect(() => {
    setMaximum(max)
  }, [max])
  useEffect(() => {
    setStepping(step)
  }, [step])

  function handleChange(event) {
    if (typeof onChange === 'function') onChange(event.target.value)
  }

  useEffect(() => {
    function sliderFocus(event) {
      if (ARROW_ACTIONS.indexOf(event.key) >= 0) {
        document.getElementById('tempo').focus()
      }
    }
    document.addEventListener('keydown', sliderFocus)
    return () => document.addEventListener('keydown', sliderFocus)
  }, [])

  return (
    <input
      id="tempo"
      name="tempo"
      className="tempo__slider"
      type="range"
      min={minimum || 60}
      max={maximum || 240}
      step={stepping || 5}
      defaultValue={defaultValue || 90}
      onChange={handleChange}
    />
  )
}

export default Slider
