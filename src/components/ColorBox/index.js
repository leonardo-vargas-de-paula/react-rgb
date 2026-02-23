import "./styles.css"

function ColorBox({backgroundColor, type}){
    const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);
    const isTooLight = (r + g + b) > 750;

return (
    <div 
      className={`color-box-${type === 'history' ? 'history' : 'main'} ${isTooLight ? 'is-too-light' : ''}`} 
      style={{ backgroundColor }}
    ></div>
);

} 

export default ColorBox;