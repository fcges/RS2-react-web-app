import Lab1 from './Lab1';
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import { Route, Routes, Navigate } from "react-router";

export default function Labs() { 
    return (
        <div id="wd-labs">
            <h1>Welcome to Web Dev</h1>
            Runyuan Feng
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2/*" element={<Lab2 />} />
                <Route path="Lab3/*" element={<Lab3 />} />
            </Routes>
        </div>
    );
}
