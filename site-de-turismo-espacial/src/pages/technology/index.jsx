import Container from "../../components/container";
import Content from "../../components/content";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import "./index.css"
const Technology = () => {
    return (
        <Container classNameValue="container technology">
            <Content>
                <Topbar />
                <Wrapper>
                    <div className="content-technology">
                        <div className="technology-title">
                            <span>03</span>
                            <p>SPACE LAUNCH 101</p>
                        </div>
                        <section className="technology-body-explanation">
                            <div className="tchnology-body-explanation-left">

                            </div>
                            <div className="tchnology-body-explanation-right"></div>
                        </section>
                    </div>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Technology;