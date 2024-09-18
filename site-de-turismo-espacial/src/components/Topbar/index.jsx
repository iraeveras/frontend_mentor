const Topbar = () => {
    return (
        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
            <div style={{}}>
                <a href="http://">Logo</a>
            </div>
            <nav style={{width: "100%", background: "#ccc"}}>
                <ul style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                    <li><a href="http://">00 Home</a></li>
                    <li><a href="http://">01 Destination</a></li>
                    <li><a href="http://">02 Crew</a></li>
                    <li><a href="http://">Technology</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Topbar;