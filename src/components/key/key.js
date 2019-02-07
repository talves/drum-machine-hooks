import React, { useReducer, useEffect } from 'react';
import '../../styles/key.css';

function Key({ undoReset, onScreen, name, sound, loop, bpm, letter, clear }) {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    { lightup: false, looping: loop, loopID: null, interval: 60000 / bpm },
  )
  const lightOn = () => {
    setState({lightup: true});
    // onScreen function defined in app.js - changes the parent's 'display' state to the name of the key that was just pressed
    onScreen(name);
  }
  const lightOff = () => {
    setState({lightup: false});
  }
  const playKey = () => {
    const audio = new Audio(sound);
    audio.type = 'audio/wav';
    // if key is already looping, then pressing again should stop the loop (assigned to the key's loopID state)
    if (state.looping && state.loopID) {
      clearInterval(state.loopID)
      setState({looping: false});
    }
    // if parent passes loop boolean prop - sound plays on a loop/interval
    else if (loop) {
      lightOn();
      audio.play();
      setState({looping: true, loopID: setInterval(function(){
        audio.play()
      }, state.interval)});
    }
    else audio.play();
  }
  const mouseDown = () => {
    lightOn()
    playKey()
  }
  const mouseUp = () => {
    if (!state.looping) lightOff()
  }
  const onKeyDown = (e) => {
    if (e.key === letter.toLowerCase()) mouseDown()
  }
  useEffect(() => {
    function keyDown(e) {
      if (e.key === letter.toLowerCase()) mouseDown()
    }
    document.addEventListener('keydown', keyDown)
    return () => document.removeEventListener('keydown', keyDown);
  }, [])
  useEffect(() => {
    function keyUp(e) {
      if (e.key === letter.toLowerCase()) {
        mouseUp()
      }
    }
    document.addEventListener('keyup', keyUp)
    return () => document.removeEventListener('keyup', keyUp);
  }, [])

  useEffect(() => {
    setState({interval: 60000 / bpm})
    // if (state.looping) {
    //   clearInterval(state.loopID);
    //   const audio = new Audio(sound);
    //   audio.type = 'audio/wav';
    //   setState({
    //     loopID: setInterval(function () {
    //       audio.play()
    //     }, state.interval)
    //   })
    // }
  }, [bpm])
  useEffect(() => {
    clearInterval(state.loopID)
    lightOff()
    undoReset()
  }, [clear])

  return (
    <div className='key__container'>
      <button title={state.interval/1000} text className={`key__button ${state.lightup && 'key__button--lit'}`} onMouseDown={mouseDown} onMouseUp={mouseUp} onKeyPress={onKeyDown}>{letter}</button>
      <audio className="clip" id={letter}></audio>
    </div>
    )
}

export default Key
