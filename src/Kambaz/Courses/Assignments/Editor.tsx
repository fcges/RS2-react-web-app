export default function AssignmentEditor() {
    return (
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
    );
}
  