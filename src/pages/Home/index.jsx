import Cards from "../../components/Cards";
import MainNavbar from "../../components/Navbar";
import { Container, Row } from "react-bootstrap";
import SearchBar from "../../components/Search";

const Home = () => {
    return (
        <>
            <MainNavbar />
            <Container>
                <Row className="mt-5 justify-content-md-left">
                    <h4>CATALOGS</h4>
                    <hr />
                    <SearchBar />
                    <Cards />
                </Row>
            </Container>
        </>
    )
}

export default Home