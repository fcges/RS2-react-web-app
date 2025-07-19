import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControl from "./AssignmentsControl";
import AssignmentGroupButtons from "./AssignmentGroupButtons";
import AssignmentButtons from "./AssignmentButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">
            <AssignmentControl />
            <ListGroup className="rounded-0 mt-5">
                <ListGroup.Item className="wd-module
                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <b>ASSIGNMENTS</b>
                        <AssignmentGroupButtons />
                    </div>
                    <ListGroup className="wd-assignments rounded-0">
                        {assignments.filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <ListGroup.Item className="wd-assignments p-3 ps-1">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <MdOutlineAssignment className="me-3 fs-3 text-success" />
                                        <div>
                                            <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                                className="wd-assignment-link" >
                                                {assignment.title}
                                            </a> <br />
                                            <div style={{ fontSize: "0.825rem" }}>
                                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assignment.available_from_date} at {assignment.available_from_time} | <br />
                                                <b>Due</b> {assignment.dueDate} at {assignment.dueTime} | {assignment.points} pts
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <AssignmentButtons />
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div >
    );
}

/*
<ListGroup.Item className="wd-module
                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS 40% of Total
                        <AssignmentGroupButtons />
                    </div>
                    <ListGroup className="wd-assignments rounded-0">
                        <ListGroup.Item className="wd-assignments p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                                        className="wd-assignment-link" >
                                        A1 - ENV + HTML
                                    </a> <br />
                                    <div style={{ fontSize: "0.825rem" }}>
                                        Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
                                        <b>Due</b> May 13 at 11:50pm | 100 pts
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <AssignmentButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-assignments p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                                        className="wd-assignment-link" >
                                        A2 - CSS + BOOTSTRAP
                                    </a> <br />
                                    <div style={{ fontSize: "0.825rem" }}>
                                        Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br />
                                        <b>Due</b> May 20 at 11:50pm | 100 pts
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <AssignmentButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-assignments p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                                        className="wd-assignment-link" >
                                        A3 - JAVASCRIPT + REACT
                                    </a> <br />
                                    <div style={{ fontSize: "0.825rem" }}>
                                        Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br />
                                        <b>Due</b> May 27 at 11:50pm | 100 pts
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <AssignmentButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
                */
