import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;

    const assignment = assignments.find((assignment: any) => assignment._id === aid)
    return (
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group className="ms-1 mb-2">
                    <Form.Label className="mb-2">Assignment Name</Form.Label>
                    <Form.Control id="wd-name" value={assignment?.title} />
                </Form.Group>
                <Form.Control as="textarea" rows={10} className="ms-1 mb-2" value={assignment?.description} />
            </Form>
            <Container>
                <Row className="mb-2">
                    <Col className="text-end" xs={3}>Points</Col>
                    <Col>
                        <Form.Control id="wd-points" value={assignment?.points} />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col className="text-end" xs={3}>Assignment Group</Col>
                    <Col>
                        <Form.Select id="wd-assignment-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col className="text-end" xs={3}>Display Grade As</Col>
                    <Col>
                        <Form.Select id="wd-grade-display">
                            <option value="PERCENT">Percentage</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col className="text-end" xs={3}>Submission Type</Col>
                    <Col>
                        <div className="border border-gray rounded-2 p-3">
                            <Form.Select id="wd-submission-type" className="mb-2">
                                <option value="ONLINE">Online</option>
                            </Form.Select>
                            <Form.Label className="ms-2 mb-2"><b>Online Entry Options</b></Form.Label>
                            <Form.Check className="ms-2 mb-2" type="checkbox" name="wd-online-entry-checkbox" id="wd-online-entry" label="Text Entry" />
                            <Form.Check className="ms-2 mb-2" type="checkbox" name="wd-online-entry-checkbox" id="wd-online-entry" label="Website URL" />
                            <Form.Check className="ms-2 mb-2" type="checkbox" name="wd-online-entry-checkbox" id="wd-online-entry" label="Media Recordings" />
                            <Form.Check className="ms-2 mb-2" type="checkbox" name="wd-online-entry-checkbox" id="wd-online-entry" label="Student Annotation" />
                            <Form.Check className="ms-2 mb-2" type="checkbox" name="wd-online-entry-checkbox" id="wd-online-entry" label="File Uploads" />
                        </div>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col className="text-end" xs={3}>Assign</Col>
                    <Col>
                        <div className="border border-gray rounded-2 p-3">
                            <Form.Group className="mb-4">
                                <Form.Label className="mb-2"><b>Assign to</b></Form.Label>
                                <Form.Select id="wd-assign-to">
                                    <option value="EVERY">Everyone</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label className="mb-2"><b>Due</b></Form.Label>
                                <Form.Control type="date" id="wd-assignment-due" defaultValue={assignment?.dueDate} />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label className="mb-2"><b>Available from</b></Form.Label>
                                        <Form.Control type="date" id="wd-assignment-available-from-date" defaultValue={assignment?.available_from_date} />
                                    </Col>
                                    <Col>
                                        <Form.Label className="mb-2"><b>Until</b></Form.Label>
                                        <Form.Control type="date" id="wd-assignment-available-until-date" defaultValue={assignment?.available_until_date} />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <div className="float-end">
                <Button as={Link as any} to={`/Kambaz/Courses/${cid}/Assignments`} variant="secondary">Cancel</Button>
                <Button as={Link as any} to={`/Kambaz/Courses/${cid}/Assignments`} variant="danger" className="ms-2">Save</Button>
            </div>
        </div>
    );
}
