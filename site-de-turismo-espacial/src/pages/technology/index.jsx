import React, { useState } from "react";
import Container from "../../components/container";
import Content from "../../components/content";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import icons from "../../constants/icons";
import "./index.css"
const Technology = () => {
    const [] = useState();
    return (
        <Container classNameValue="container technology">
            <Content>
                <Topbar />
                <Wrapper>
                    <div className="content-technology">
                        <div className="container-technology">
                            <div className="technology-title">
                                <span>03</span>
                                <p>SPACE LAUNCH 101</p>
                            </div>
                            <section className="technology-body-explanation">
                                <div className="technology-body-explanation-left">
                                    <div className="pagination-explanation-buttons">
                                        <div className="box-btn-tchnology">
                                            <button className="btn btn-index-1">1</button>
                                        </div>
                                        <div className="box-btn-tchnology">
                                            <button className="btn btn-index-2">2</button>
                                        </div>
                                        <div className="box-btn-tchnology">
                                            <button className="btn btn-index-3">3</button>
                                        </div>
                                    </div>
                                    <div className="technology-content-explanation">
                                        <div className="classification">
                                            <div className="classification-name">
                                                THE TERMINOLOGY…
                                            </div>
                                            <div className="classification-commander">
                                                LAUNCH VEHICLE
                                            </div>
                                        </div>
                                        <div className="classification-description">
                                            A launch vehicle or carrier rocket is a rocket-propelled vehicle
                                            used to carry a payload from Earth's surface to space, usually to
                                            Earth orbit or beyond. Our WEB-X carrier rocket is the most
                                            powerful in operation. Standing 150 metres tall, it's quite an
                                            awe-inspiring sight on the launch pad!
                                        </div>
                                    </div>
                                </div>
                                <div className="technology-body-explanation-right">
                                    <div className="box-technology-image">
                                        <div className="technology-image"></div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Technology;