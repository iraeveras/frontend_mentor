import Container from "../../components/container";
import Content from "../../components/content";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import "./index.css"
const Crew = () => {
    return (
        <Container classNameValue="container crew">
            <Content>
                <Topbar/>
                <Wrapper>
                    <div className="content-crew"></div>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Crew;