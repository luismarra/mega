export default function NumeroDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50px",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "2rem",
            margin: "20px",
        }}>
            {props.resultado}
        </div>
    )
}