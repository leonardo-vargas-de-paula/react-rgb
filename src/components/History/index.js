import "./styles.css";
import ColorBox from "../ColorBox";

function History({ data, backgroundColor }) {

    const getColor = (rgb) => (
        <div className="history-response">
            <ColorBox backgroundColor={backgroundColor(...rgb)} type="history" />  
            <li key={rgb.join()}>{rgb.join()}</li>
        </div>
       
    )
    return (
        <section>
            <ul>
                {data.map(getColor)}
            </ul>
        </section>
    );
}

export default History;