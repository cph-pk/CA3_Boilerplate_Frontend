import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { URLTrivia } from "./settings";

const Trivia = () => {

    const [trivia, setTrivia] = useState("");
    const fetchAllTrivia = () => {
        fetch(URLTrivia).then(res => res.json()).then(data => {
            setTrivia(data[0]);
        })
    }

    //loads trivia first time
    useEffect(() => {
        fetchAllTrivia();
    }, []);

    return (
        <div>

            <Container>
                <h1 className="display-1 text-center">Trivia</h1>
                <h1 className="display-4 text-center text-muted">Random trivia</h1>
                <Row className="mt-4">
                    <Col>

                        <Card bg="primary" text="light" className="mx-auto" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Question:</Card.Title>
                                <Card.Text>
                                    {trivia.question}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="success" text="light" className="mx-auto mt-4" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Answer:</Card.Title>
                                <Card.Text>
                                    {trivia.answer}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button variant="outline-secondary mt-4" onClick={() => fetchAllTrivia()}>Get new Trivia</Button>
                    </Col>
                </Row>
            </Container>
        </div>

    );

}

export default Trivia;