import "./styles.css";

function History({ data }) {

    const getColor = (rgb) => (
        <li key={rgb.join()}>
            {rgb.join(", ")}
        </li>
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