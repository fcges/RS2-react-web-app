import { Link, useParams, useLocation } from "react-router-dom";
import { ListGroup, Anchor } from "react-bootstrap";
export default function CourseNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const links = [
        { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
        { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
        { label: "Piazza", path: "https://piazza.com/" },
        { label: "Zoom", path: "https://www.zoom.com/" },
        { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
        { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
        { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
        { label: "People", path: `/Kambaz/Courses/${cid}/People` }];
    return (
        <ListGroup className="wd fs-5 rounded-0">
            {links.map((link) => (
                <ListGroup.Item key={link.path} as={link.path.startsWith("http") ? Anchor : Link} {...link.path.startsWith("http") ? { href: link.path } : { to: link.path }}
                    className={`${pathname.includes(link.path) ? "active border border-0" : "text-danger border border-0"}`}>
                    {link.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}