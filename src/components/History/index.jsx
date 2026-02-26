import "./styles.css";
import ColorBox from "../ColorBox";

function History({ data, backgroundColor }) {
  const getColor = (rgb) => (
    <div className="history-response">
      <ColorBox
        backgroundColor={backgroundColor(...rgb)}
        width="1rem"
        height="1rem"
        borderRadius="20%"
      />
      <li key={rgb.join()}>{rgb.join()}</li>
    </div>
  );
  return (
    <>
      {(data.length > 0 && (
        <section>
          <ul>{data.map(getColor)}</ul>
        </section>
      )) || <p className="notice">No colors saved yet...</p>}
    </>
  );
}

export default History;
