import React, { useState } from "react";
import icons from "../../constants/icons.js"
import "./index.css";



const Topbar = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    const handleOpeMenuMobile = () => {
        setOpenMenuMobile(true)
    }

    const handleCloseMenuMobile = () => {
        setOpenMenuMobile(false)
    }
    return (
        <>
            <div className="topbar">
                <div className="container-logo">
                    <div className="content-logo">
                        <a className="link-logo" href="/">
                            <img src={icons.logo} alt="" />
                        </a>
                        <span className="line"></span>
                    </div>
                </div>

                <div className="container-btn-hamburger">
                    <button onClick={handleOpeMenuMobile} className="btn-hamburger">
                        <img src={icons.iconMenuHamburguer} alt="" />
                    </button>
                </div>

                <nav className="navigation">
                    <ul className="nav-list">
                        <li className="active nav-link"><a href="/"><span>00</span> Home</a></li>
                        <li className="nav-link"><a href="/destination"><span>01</span> Destination</a></li>
                        <li className="nav-link"><a href="http://"><span>02</span> Crew</a></li>
                        <li className="nav-link"><a href="http://"><span>03</span> Technology</a></li>
                    </ul>
                </nav>
            </div>

            <nav className={openMenuMobile ? "navigation-mobile" : "close-navigation-mobile"}>
                <div className="container-btn-close">
                    <div>
                        <button onClick={handleCloseMenuMobile} className="btn-close"><img src={icons.iconMenuClose} alt="" /></button>
                    </div>

                </div>
                <ul className="nav-list">
                    <div className="box-links">
                        <li className="active nav-link"><a href="/"><span>00</span> Home</a></li>
                        <li className="nav-link"><a href="/destination"><span>01</span> Destination</a></li>
                        <li className="nav-link"><a href="http://"><span>02</span> Crew</a></li>
                        <li className="nav-link"><a href="http://"><span>03</span> Technology</a></li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Topbar;