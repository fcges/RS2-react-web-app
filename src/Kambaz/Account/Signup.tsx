import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <Form.Control placeholder="username" className="mb-2" defaultValue="user1" />
            <Form.Control placeholder="password" type="password" className="mb-2" defaultValue="123456" />
            <Form.Control placeholder="verify password"
                type="password" className="mb-2" defaultValue="123456" />
            <Link to="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2"> Sign up </Link>
            <Link to="/Kambaz/Account/Signin" >Sign in</Link>
        </div>
    );
}