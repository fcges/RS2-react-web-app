import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group className="ms-1 mb-2">
                    <Form.Label className="mb-2">Assignment Name</Form.Label>
                    <Form.Control id="wd-name" value="A1 - ENV + HTML" />
                </Form.Group>
                <Form.Control as="textarea" rows={10} className="ms-1 mb-2" />
            </Form>
            <Container>
                <Row className="mb-2">
                    <Col className="text-end" xs={3}>Points</Col>
                    <Col>
                        <Form.Control id="wd-points" value={100} />
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
                                <Form.Control type="date" id="wd-assignment-due" defaultValue="2025-07-15" />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label className="mb-2"><b>Available from</b></Form.Label>
                                        <Form.Control type="date" id="wd-assignment-due" defaultValue="2025-07-09" />
                                    </Col>
                                    <Col>
                                        <Form.Label className="mb-2"><b>Until</b></Form.Label>
                                        <Form.Control type="date" id="wd-assignment-due" defaultValue="2025-07-15" />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <div className="float-end">
                <Button variant="secondary">Cancel</Button>
                <Button variant="danger" className="ms-2">Save</Button>
            </div>
        </div>
        /*
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" rows={10} cols={70}>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assignment-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-grade-display">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-grade-display">
                            <option value="PERCENT">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">Online</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" />
                    <td>
                        <label id="wd-online-entry">Online Entry Options</label> <br />
                        <input type="checkbox" name="wd-online-entry-checkbox" id="wd-online-text" />
                        <label htmlFor="wd-online-text">Text Entry</label> <br />
                        <input type="checkbox" name="wd-online-entry-checkbox" id="wd-online-url" />
                        <label htmlFor="wd-online-url">Website URL</label> <br />
                        <input type="checkbox" name="wd-online-entry-checkbox" id="wd-online-media" />
                        <label htmlFor="wd-online-media">Media Recordings</label> <br />
                        <input type="checkbox" name="wd-online-entry-checkbox" id="wd-online-annotation" />
                        <label htmlFor="wd-online-annotation">Student Annotation</label> <br />
                        <input type="checkbox" name="wd-online-entry-checkbox" id="wd-online-file" />
                        <label htmlFor="wd-online-file">File Uploads</label>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        Assign to <br />
                        <select id="wd-assign-to">
                            <option value="EVERY">Everyone</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" />
                    <td>
                        Due <br />
                        <input type="date" id="wd-assignment-due" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" />
                    <td>
                        Available from <br />
                        <input type="date" id="wd-assignment-from" />
                    </td>
                    <td>
                        Until <br />
                        <input type="date" id="wd-assignment-until" />
                    </td>
                </tr>
            </table>
            <hr />
            <div style={{ textAlign: "right" }}>
                <button type="button" id="wd-editor-cancel">Cancel</button>
                <button type="button" id="wd-editor-save">Save</button>
            </div>
        </div>
        */
    );
}
