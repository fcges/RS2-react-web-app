import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";

export default function Quizzes() {
    return (
        <div>
            <ListGroup className="rounded-0 mt-5">
                <ListGroup.Item className="wd-module
                                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Quizzes
                        <FaCaretDown className="float-end mt-1" />
                    </div>
                    <ListGroup className="wd-assignments rounded-0">
                        <ListGroup.Item className="wd-quizzes p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div>
                                    Q1<br />
                                    <div style={{ fontSize: "0.825rem" }}>
                                        Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
                                        <b>Due</b> May 13 at 11:50pm | 100 pts
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-quizzes p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div>
                                    Q2<br />
                                    <div style={{ fontSize: "0.825rem" }}>
                                        Multiple Modules | <b>Not available until</b> May 10 at 12:00am | <br />
                                        <b>Due</b> May 15 at 11:50pm | 100 pts
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-quizzes p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div>
                                    Q3<br />
                                    <div style={{ fontSize: "0.825rem" }}>
                                        Multiple Modules | <b>Not available until</b> May 16 at 12:00am | <br />
                                        <b>Due</b> May 22 at 11:50pm | 100 pts
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}