import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import { ListGroup } from "react-bootstrap";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0">
                <ListGroup.Item className="wd-module
                    p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1
                        <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div className="fs-5">
                                    Introduction to the course
                                </div>
                                <div className="ms-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div className="fs-5">
                                    Learn what is Web Development
                                </div>
                                <div className="ms-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            READING
                            <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div className="fs-5">
                                    Full Stack Developer - Chapter 1 - Introduction
                                </div>
                                <div className="ms-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div className="fs-5">
                                    Full Stack Developer - Chapter 2 - Creating User Interfaces
                                </div>
                                <div className="ms-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            SLIDES
                            <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div className="fs-5">
                                    Introduction to Web Development
                                </div>
                                <div className="ms-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div className="fs-5">
                                    Creating an HTTP server with Node.js
                                </div>
                                <div className="ms-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div className="fs-5">
                                    Creating a React Application
                                </div>
                                <div className="ms-auto">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item className="wd-module
                               p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 2
                        <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LESSON 1
                            <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LESSON 2
                            <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
        /*
         < div >
             <button type="button" id="wd-course-collapse-btn">Collapse All</button>
             <button type="button" id="wd-course-progress-btn">View Progress</button>
             <select id="wd-course-publish-dropdown">
                 <option value="ALL">Publish All</option>
             </select>
             <button type="button" id="wd-course-publish-btn">Publish</button>
             <button type="button" id="wd-course-add-module">+ Module</button>
             <ul id="wd-modules">
                 <li className="wd-module">
                     <div className="wd-title">Week 1</div>
                     <ul className="wd-lessons">
                         <li className="wd-lesson">
                             <span className="wd-title">LEARNING OBJECTIVES</span>
                             <ul className="wd-content">
                                 <li className="wd-content-item">Introduction to the course</li>
                                 <li className="wd-content-item">Learn what is Web Development</li>
                             </ul>
                         </li>
                         <li className="wd-lesson">
                             <span className="wd-title">READING</span>
                             <ul className="wd-content">
                                 <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                 <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
                             </ul>
                         </li>
                         <li className="wd-lesson">
                             <span className="wd-title">SLIDES</span>
                             <ul className="wd-content">
                                 <li className="wd-content-item">Introduction to Web Development</li>
                                 <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                 <li className="wd-content-item">Creating a React Application</li>
                             </ul>
                         </li>
                     </ul>
                 </li>
                 <li className="wd-module">
                     <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                     <ul className="wd-lessons">
                         <li className="wd-lesson">
                             <span className="wd-title">LEARNING OBJECTIVES</span>
                             <ul className="wd-content">
                                 <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                 <li className="wd-content-item">Deploy the assignment to Netlify</li>
                             </ul>
                         </li>
                         <li className="wd-lesson">
                             <span className="wd-title">SLIDES</span>
                             <ul className="wd-content">
                                 <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                 <li className="wd-content-item">Formatting Web content with Headings and Paragraphs</li>
                                 <li className="wd-content-item">Formatting content with Lists and Tables</li>
                             </ul>
                         </li>
                     </ul>
                 </li>
                 <li className="wd-module">
                     <div className="wd-title">Week 2</div>
                 </li>
                 <li className="wd-module">
                     <div className="wd-title">Week 3</div>
                 </li>
             </ul>
         </div >
         */
    );
}
