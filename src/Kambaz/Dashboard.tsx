import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaAlignJustify } from "react-icons/fa";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h2 id="wd-dashboard-title" className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" />Dashboard</h2> <hr />
            <h3 id="wd-dashboard-published">Published Courses (12)</h3> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link
                                text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.jpg" width={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link
                                text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.jpg" width={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link
                                text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.jpg" width={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
