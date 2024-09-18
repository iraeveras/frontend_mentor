import "./index.css";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="container-logo">
                <div className="content-logo">
                    <a className="link-logo" href="/"></a>
                    <span className="line"></span>
                </div>
            </div>
            {/* <button className="btn-hamburger">
                <img className="menu-hamburger" src="../../assets/shared/icon-hamburger.svg" alt="" />
            </button> */}
            <nav className="navigation">
                <ul className="nav-list">
                    <li className="active nav-link"><a href="/">00 Home</a></li>
                    <li className="nav-link"><a href="/destination">01 Destination</a></li>
                    <li className="nav-link"><a href="http://">02 Crew</a></li>
                    <li className="nav-link"><a href="http://">Technology</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Topbar;