import "./styles.css";

function GenericButton({ children, onClick, backgroundColor, color, disabled }) {
  return (
    <button className="generic-button" onClick={onClick} style={{ backgroundColor, color }} disabled={disabled}>
      {children}
    </button>
  );
}

export default GenericButton;
