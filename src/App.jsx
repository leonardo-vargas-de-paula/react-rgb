import { useState } from "react";
import ColorBox from "./components/ColorBox";
import RangeInput from "./components/RangeInput";
import History from "./components/History";
import GenericButton from "./components/GenericButton";

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const changeToRed = ({ target }) => {
    setRed(parseInt(target.value));
  };

  const changeToGreen = ({ target }) => {
    setGreen(parseInt(target.value));
  };

  const changeToBlue = ({ target }) => {
    setBlue(parseInt(target.value));
  };

  const [history, setHistory] = useState([]);

  const saveColor = () => {
    setHistory((h) => [[red, green, blue], ...h]);
  };

  const backgroundColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

  const isColorInHistory = history.some(
    (rgb) => JSON.stringify(rgb) === JSON.stringify([red, green, blue]),
  );

  const generateRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    setRed(randomRed);
    setGreen(randomGreen);
    setBlue(randomBlue);
  };

  return (
    <main className="App">
      <div className="color-container">
        <div className="color-inputs">
          <h3>Red: {red}</h3>
          <RangeInput min="0" max="255" value={red} onChange={changeToRed} />

          <h3>Green: {green}</h3>
          <RangeInput
            min="0"
            max="255"
            value={green}
            onChange={changeToGreen}
          />

          <h3>Blue: {blue}</h3>
          <RangeInput min="0" max="255" value={blue} onChange={changeToBlue} />
        </div>

        <div className="color-view">
          <ColorBox
            backgroundColor={backgroundColor(red, green, blue)}
            width="8rem"
            height="8rem"
            borderRadius="1.5rem"
          />
          <GenericButton
            className="save-button"
            backgroundColor="#c3f628"
            color="#000"
            onClick={saveColor}
            disabled={isColorInHistory}
          >
            Save Color
          </GenericButton>
          <GenericButton
            className="random-button"
            backgroundColor="#a44dff"
            color="#ffffff"
            onClick={generateRandomColor}
          >
            Random
          </GenericButton>
        </div>
      </div>

      <hr />

      <div className="history-container">
        <h2>History</h2>
        <History data={history} backgroundColor={backgroundColor} />
      </div>
    </main>
  );
}

export default App;
