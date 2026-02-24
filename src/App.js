import { useState } from 'react';
import ColorBox from './components/ColorBox';
import RangeInput from './components/RangeInput';
import History from './components/History';


function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const changeToRed = ({ target }) => {
    setRed(parseInt(target.value));
  }

  const changeToGreen = ({ target }) => {
    setGreen(parseInt(target.value));
  }

  const changeToBlue = ({ target }) => {
    setBlue(parseInt(target.value));
  }

  const [history, setHistory] = useState([]);


  const saveColor = () => {
    setHistory(h =>
      [[red, green, blue], ...h]
    )
  }

  const backgroundColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

  const isColorInHistory = history.some(
    (rgb) => JSON.stringify(rgb) === JSON.stringify([red, green, blue])
  );

  return (
    <div className="App">

      <div className="color-container">
        <div className="color-inputs">
          <h3>Red: {red}</h3>
          <RangeInput min="0" max="255" value={red} onChange={changeToRed} />


          <h3>Green: {green}</h3>
          <RangeInput min="0" max="255" value={green} onChange={changeToGreen} />

          <h3>Blue: {blue}</h3>
          <RangeInput min="0" max="255" value={blue} onChange={changeToBlue} />
        </div>

        <div className="color-view">
          <ColorBox backgroundColor={backgroundColor(red, green, blue)} type="main" />
          <button className='history-button' onClick={saveColor}
            disabled={ isColorInHistory }>Save Color</button>

        </div>
      </div>

      <hr />

      <div className="history-container">
        <h2>History</h2>
        <History data={history} backgroundColor={backgroundColor} />
      </div>




    </div>

  );
}




export default App;
