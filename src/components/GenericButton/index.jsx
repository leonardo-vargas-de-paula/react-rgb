import "./styles.css";

function GenericButton({
  children,
  onClick,
  backgroundColor,
  color,
  disabled,
}) {
  const checkStyle = {
    backgroundColor: disabled ? undefined : backgroundColor,
    color: disabled ? undefined : color,
  };
  return (
    <button
      className="generic-button"
      onClick={onClick}
      disabled={disabled}
      style={checkStyle}
    >
      {children}
    </button>
  );
}

export default GenericButton;
