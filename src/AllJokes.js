import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { URLJokes } from "./settings";

const AllJokes = () => {

    const [joke, setJoke] = useState("");
    const fetchAllJokes = () => {
        fetch(URLJokes).then(res => res.json()).then(data => {
            setJoke(data);
        })
    }

    //loads joke first time
    useEffect(() => {
        fetchAllJokes();

    }, []);

    return (
        <div>

            <Container>
                <h1 className="text-center display-1">Jokes</h1>
                <Row className="mt-4">
                    <Col>
                        <Card border="primary" className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header>Chuck Norris Joke:</Card.Header>
                            <Card.Body>
                                <Card.Title><a href={joke.joke1Reference}>Source</a></Card.Title>
                                <Card.Text>
                                    {joke.joke1}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header>Dad Joke:</Card.Header>
                            <Card.Body>
                                <Card.Title><a href={joke.joke2Reference}>Source</a></Card.Title>
                                <Card.Text>
                                    {joke.joke2}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button variant="primary mt-3" onClick={() => fetchAllJokes()}>Get new jokes</Button>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default AllJokes;