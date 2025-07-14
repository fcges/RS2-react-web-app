import { Container, Row, Col, Form, Button } from "react-bootstrap";


export default function Grades() {
    return (
        <div>
            <h2>Grades</h2>
            <hr />
            <Container id="wd-grades-filter">
                <Row>
                    <Col xs={3}>
                        Course
                    </Col>
                    <Col xs={3}>
                        Sort By
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Form.Select>
                            <option>1234</option>
                        </Form.Select>
                    </Col>
                    <Col xs={3}>
                        <div className="d-flex">
                            <Form.Select>
                                <option>Module</option>
                                <option>Due time</option>
                                <option>Name</option>
                                <option>Group</option>
                            </Form.Select>
                            <Button variant="danger" className="ms-2">Apply</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br /> <br /> <br />
            <Container>
                <Row>
                    <Col>
                        Name
                    </Col>
                    <Col>
                        Due Time
                    </Col>
                    <Col>
                        Submission Time
                    </Col>
                    <Col>
                        Status
                    </Col>
                    <Col>
                        Grade
                    </Col>
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row className="mb-5">
                    <Col>
                        A1
                    </Col>
                    <Col>
                        July 9th, before 23:59
                    </Col>
                    <Col>
                        July 7th, 12:34
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                        100%
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        Q1
                    </Col>
                    <Col>
                        July 13th, before 23:59
                    </Col>
                    <Col>
                        July 11th, 12:34
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                        90%
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        A2
                    </Col>
                    <Col>
                        July 18th, before 23:59
                    </Col>
                    <Col>
                        July 16th, 12:34
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                        92%
                    </Col>
                </Row>
            </Container>
        </div>
    );
}