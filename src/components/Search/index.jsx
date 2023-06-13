import { Row, Col, Form } from "react-bootstrap"

const SearchBar = () => {
    return(
        <div className="searchBar">
            <Col md="6">
            <Form className="md-form">
                <Row className="mb-3">
                    {/* <input 
                    type="text"
                    className="form-control form-control-sm ml-3 w-75 searchBox" 
                    placeholder="Search Products"/>
                    <input type="submit" /> */}
                    <Form.Group className="searchBox col" controlId="validationCustom01">
                        <Form.Control
                            type="text"
                            placeholder="Search Products"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="validationCustom02" style={{marginLeft: "-20px"}}>
                        <input 
                        type="submit" 
                        className="btn btn-primary"
                        value="Search"
                        />
                    </Form.Group>
                </Row>
            </Form>
            </Col>
        </div>
    )
}

export default SearchBar