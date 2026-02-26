import "./styles.css"

function ColorBox({backgroundColor, width, height, borderRadius}) {
    const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);
    const isTooLight = (r + g + b) > 750;

return (
    <div 
      className={`color-box ${isTooLight ? 'is-too-light' : ''}`} 
      style={{ backgroundColor, width, height, borderRadius }}
    ></div>
);

} 

export default ColorBox;