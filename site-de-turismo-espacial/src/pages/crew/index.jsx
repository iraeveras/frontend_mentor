import Container from "../../components/container";
import Content from "../../components/content";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import icons from "../../constants/icons";
import "./index.css"
const Crew = () => {
    return (
        <Container classNameValue="container crew">
            <Content>
                <Topbar />
                <Wrapper>
                    <div className="content-crew">
                        <div className="crew-title">
                            <span>02</span>
                            <p>MEET YOUR CREW</p>
                        </div>
                        <section className="crew-body-explanation">
                            <div className="crew-body-explanation-left">
                                <div className="profile">
                                    <div className="description-profile">
                                        <p className="role">Commander</p>
                                        <p className="name">Douglas Hurley</p>
                                    </div>
                                    <p className="bio">
                                        Douglas Gerald Hurley is an American engineer, former Marine Corps
                                        pilot and former NASA astronaut. He launched into space for the third
                                        time as commander of Crew Dragon Demo-2.
                                    </p>
                                </div>
                                <div className="pagination">
                                    <ul>
                                        <li className="small-pagination active"></li>
                                        <li className="small-pagination"></li>
                                        <li className="small-pagination"></li>
                                        <li className="small-pagination"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="crew-body-explanation-right">
                                <div className="crew-image">
                                    <img src={icons.imgDouglasHurleyPng} alt="" />
                                </div>
                            </div>
                        </section>
                    </div>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Crew;