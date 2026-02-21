import "./styles.css"

function ColorBox({backgroundColor}){
    const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);
    const isTooLight = (r + g + b) > 750;

return (
    <div 
      className={`color-box ${isTooLight ? 'is-too-light' : ''}`} 
      style={{ backgroundColor }}
    ></div>
);

} 

export default ColorBox;