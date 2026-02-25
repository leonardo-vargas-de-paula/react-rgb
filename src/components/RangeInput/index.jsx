import "./styles.css"

function RangeInput({min, max, value, onChange  }){
return (
    <input type="range" min={min} max={max} value={value} onChange={onChange} />
);

} 

export default RangeInput;