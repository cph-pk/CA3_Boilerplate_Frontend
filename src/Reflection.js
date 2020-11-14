import { Container, Row, Col } from "react-bootstrap";
const Reflection = () => {
    return (
        <div>
            <Container>
                <h1 className="display-1 text-center">Home</h1>
                <h1 className="display-4 text-center text-muted">Reflection</h1>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <p className="mt-4">During this project I haved learned how to make additional
                        calls to other servers while using the correct CORS standart.</p>
                        <p>I also gained experience in how to read documentation on external API's.
                        The hard thing here is that different API's return different kinds of JSON strings.
                        An example could be that my JSON response was an object with several
                        other objects that also contained several arrays. This made it very hard to use
                        my entities and DTO in the correct way.
                        </p>
                        <p>Finally I also learned that I have to remember to add a
                        key to a row when making a list or table.
                        This is especially important when using the .map function since it needs
                        to be able to identify each row uniquely.</p>

                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
export default Reflection;