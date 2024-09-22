import Explore from "../../components/explore";
import Space from "../../components/space";
import Wrapper from "../../components/wrapper";
import Wrappercontent from "../../components/wrapper-content";
import "./index.css";

const Home = () => {
    return (
        <div className="home">
            <Wrapper classNameValue="wrapper-home">
                <Wrappercontent classNameValue="wrapper-content-home">
                    <Space/>
                    <Explore />
                </Wrappercontent>
            </Wrapper>
        </div>
    )
}

export default Home;