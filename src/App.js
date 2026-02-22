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
          <ColorBox backgroundColor={`rgb(${red}, ${green}, ${blue})`} />
          <button className='history-button' onClick={saveColor}>Save Color</button>

        </div>
      </div>

      <hr/>

      <div className="history-container">
        <h2>History</h2>
      </div>




    </div>

  );
}




export default App;
