import "./styles.css";
import ColorBox from "../ColorBox";

function History({ data }) {

    const getColor = (rgb) => (
        <div className="history-response">
            <li key={rgb.join()}>{rgb.join()}</li>
            <ColorBox backgroundColor={`rgb(${rgb.join(',')})`} type="history" />  
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