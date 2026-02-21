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

  const SVGShape = () => (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="50" fill="green" />
    </svg>
  );

  return (
    <>
      <input type="range" min="0" max="255" value={red} onChange={changeToRed} />
      <h3>Red: {red}</h3>

      <input type="range" min="0" max="255" value={green} onChange={changeToGreen} />
      <h3>Green: {green}</h3>

      <input type="range" min="0" max="255" value={blue} onChange={changeToBlue} />
      <h3>Blue: {blue}</h3>

      <div>
        <SVGShape />
      </div>
    </>

  );
}




export default App;
