import React, { useReducer } from "react";
import Key from "./key/key";
import Screen from "./screen/screen";
import Mode from "./mode/mode";
import Tempo from "./tempo/tempo";
import Reset from "./reset/reset";
import "../styles/machine.css";

// need to import entire contents of audio folder to enable wav playback :( ?
import clapCrushed from "../audio/clap-crushed.wav";
import clapTape from "../audio/clap-tape.wav";
import cowbell808 from "../audio/cowbell-808.wav";
import hihat808 from "../audio/hihat-808.wav";
import hihatAcoustic from "../audio/hihat-acoustic02.wav";
import kickAcoustic from "../audio/kick-acoustic02.wav";
import kickDry from "../audio/kick-dry.wav";
import percMetal from "../audio/perc-metal.wav";
import tomAcoustic from "../audio/tom-acoustic02.wav";

/**
 * import header and footer
 */
import Header from "./header";
import Footer from "./footer";

function App() {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    { bpm: 60, clear: true, loop: false, display: "" },
  )

  const activateDisplay = (message) => {
    setState({ display: message });
  }
  const activateLoop = (value) => {
    setState({ loop: value })
  }
  const setTempo = (tempo) => {
    setState({ bpm: tempo })
  }
  const reset = () => {
    setState({ clear: true })
  }
  const undoReset = () => {
    setState({ clear: false })
  }

  return (
    <React.Fragment>
      <Header />
      <div className="machine__container" id="drum-machine">
        <Screen display={state.display} id="display" />
        <h3 className="machine__header">PJSmooth's Drum Machine</h3>
        <Mode loop={state.loop} action={activateLoop} />
        <Reset action={reset} />
        <div className="machine__keypad">
          <Key
            letter="Q"
            sound={clapCrushed}
            onScreen={activateDisplay}
            name="clapCrushed"
            loop={state.loop}
            bpm={state.bpm}
            clear={state.clear}
            undoReset={undoReset}
            className="drum-pad"
          />
          <Key
            letter="W"
            sound={clapTape}
            onScreen={activateDisplay}
            name="clapTape"
            loop={state.loop}
            bpm={state.bpm}
            clear={state.clear}
            undoReset={undoReset}
            className="drum-pad"
          />
          <Key
            letter="E"
            sound={cowbell808}
            onScreen={activateDisplay}
            name="cowbell808"
            loop={state.loop}
            bpm={state.bpm}
            clear={state.clear}
            undoReset={undoReset}
            className="drum-pad"
          />
          <Key
            letter="A"
            sound={hihat808}
            onScreen={activateDisplay}
            name="hihat808"
            loop={state.loop}
            bpm={state.bpm}
            clear={state.clear}
            undoReset={undoReset}
            className="drum-pad"
          />
          <Key
            letter="S"
            sound={hihatAcoustic}
            onScreen={activateDisplay}
            name="hihatAcoustic"
            loop={state.loop}
            bpm={state.bpm}
            clear={state.clear}
            undoReset={undoReset}
            className="drum-pad"
          />
          <Key
            letter="D"
            sound={kickAcoustic}
            onScreen={activateDisplay}
            name="kickAcoustic"
            loop={state.loop}
            bpm={state.bpm}
            clear={state.clear}
            undoReset={undoReset}
            className="drum-pad"
          />
          <Key
            letter="Z"
            sound={kickDry}
            onScreen={activateDisplay}
            name="kickDry"
            loop={state.loop}
            bpm={state.bpm}
            clear={state.clear}
            undoReset={undoReset}
            className="drum-pad"
          />
          <Key
            letter="X"
            sound={percMetal}
            onScreen={activateDisplay}
            name="percMetal"
            loop={state.loop}
            bpm={state.bpm}
            clear={state.clear}
            undoReset={undoReset}
            className="drum-pad"
          />
          <Key
            letter="C"
            sound={tomAcoustic}
            onScreen={activateDisplay}
            name="tomAcoustic"
            loop={state.loop}
            bpm={state.bpm}
            clear={state.clear}
            undoReset={undoReset}
            className="drum-pad"
          />
        </div>
        <Tempo action={setTempo} />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
