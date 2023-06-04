import MainNavbar from "../../components/Navbar";
import { Container, Row } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <MainNavbar />
            <Container>
                <Row className="mt-5 justify-content-md-left">
                    <h4>CATALOGS</h4>
                    <hr />
                </Row>
            </Container>
        </>
    )
}

export default Home