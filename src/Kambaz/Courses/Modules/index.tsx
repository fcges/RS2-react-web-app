export default function Modules() {
    return (
        <div>
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
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 3</div>
                </li>
            </ul>
        </div>
    );
}
  