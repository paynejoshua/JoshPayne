import React from "react"
import Portfolio from "../projectList"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

function Projects() {


    return (
        <div>
            <Container>

                <Row className="justify-content-between">
                    {Portfolio.map((item) => {
                        return (
                            <Col lg={6} sm={6} key={item.name}>


                                <Card className="mb-4" style={{ width: "18rem", height: "20rem", overflow: "scroll" }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={item.img} style={{ height: "9rem" }}></Card.Img>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text><a rel="noreferrer" href={item.repo} target="_blank">Repo</a></Card.Text>
                                        <Card.Text><a rel="noreferrer" href={item.deployed} target="_blank">Deployed</a></Card.Text>
                                        <Card.Text>{item.tools}</Card.Text>
                                        <Card.Text>{item.role}</Card.Text>
                                        <Card.Text>{item.note}</Card.Text>
                                    </Card.Body>

                                </Card>
                            </Col>

                        )
                    })}
                </Row>


            </Container>
        </div>

    )
}

export default Projects