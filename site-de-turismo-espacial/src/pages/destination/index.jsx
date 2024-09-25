import Container from "../../components/container";
import Content from "../../components/content";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import icons from "../../constants/icons";
import "./index.css";

const Destination = () => {
    return (
        <Container classNameValue="container destination">
            <Content>
                <Topbar />
                <Wrapper>
                    <div className="content-destination">
                        <div className="destination-title">
                            <span>01</span>
                            <p>pick your destination</p>
                        </div>
                        <section className="destination-explanation">
                            <div className="img-explanation">
                                <div className="box-img-explanation">
                                    <img src={icons.imgMoonWebg} alt="" />
                                </div>
                            </div>
                            <div className="content-explanation">
                                <div className="box-content-explanation">
                                    <nav className="menu-destination">
                                        <ul>
                                            <li><button>moon</button></li>
                                            <li><button>mars</button></li>
                                            <li><button>europa</button></li>
                                            <li><button>titan</button></li>
                                        </ul>
                                    </nav>
                                    <div className="about">
                                        <h1 className="about-name">moon</h1>
                                        <p className="about-text">
                                            See our planet as you’ve never seen it before.
                                            A perfect relaxing trip away to help regain perspective and come
                                            back refreshed. While you’re there, take in some history
                                            by visiting the Luna 2 and Apollo 11 landing sites.
                                        </p>
                                    </div>
                                    <img className="division-line" src={icons.imgLine} alt="" />
                                    <footer>
                                        <div className="distance">
                                            <span className="descrition-text">avg. distance</span>
                                            <span className="descrition-number">384,400 km</span>
                                        </div>
                                        <div className="time">
                                            <span className="descrition-text">est. travel time</span>
                                            <span className="descrition-day">3 days</span>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </section>
                    </div>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Destination;