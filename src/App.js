import { useState } from 'react';
import ColorBox from './components/ColorBox';
import RangeInput from './components/RangeInput';

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [history, setHistory] = useState([]);



  const changeToRed = ({ target }) => {
    setRed(parseInt(target.value));
  }

  const changeToGreen = ({ target }) => {
    setGreen(parseInt(target.value));
  }

  const changeToBlue = ({ target }) => {
    setBlue(parseInt(target.value));
  }


  return (
    <div className="App">

      <div className="color-inputs">
        <h3>Red: {red}</h3>
        <RangeInput min="0" max="255" value={red} onChange={changeToRed} />


        <h3>Green: {green}</h3>
        <RangeInput min="0" max="255" value={green} onChange={changeToGreen} />

        <h3>Blue: {blue}</h3>
        <RangeInput min="0" max="255" value={blue} onChange={changeToBlue} />
      </div>

      <div className="color-container">
        <ColorBox backgroundColor={`rgb(${red}, ${green}, ${blue})`} />
        <button className='history-button'>Save Color</button>

      </div>

      

    </div>

  );
}




export default App;
