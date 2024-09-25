import Container from "../../components/container";
import Content from "../../components/content";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import "./index.css"
const Technology = () => {
    return (
        <Container classNameValue="container technology">
            <Content>
                <Topbar/>
                <Wrapper>
                    <div className="content-technology"></div>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Technology;