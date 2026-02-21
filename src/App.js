import { useState } from 'react';

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


  return (
    <>
      <input type="range" min="0" max="255" value={red} onChange={changeToRed} />
      <h3>Red: {red}</h3>

      <input type="range" min="0" max="255" value={green} onChange={changeToGreen} />
      <h3>Green: {green}</h3>

      <input type="range" min="0" max="255" value={blue} onChange={changeToBlue} />
      <h3>Blue: {blue}</h3>
      
    </>

  );
}




export default App;
