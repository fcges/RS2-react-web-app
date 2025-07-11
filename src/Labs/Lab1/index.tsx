export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <p>Welcome to Lab 1!</p>
            <div id="wd-p-tag">
                <h4>Heading Tags</h4>
                <p id="wd-heading">
                    Text documents are often broken up into several sections and subsections.
                    Each section is usually prefaced with a short title or heading that attempts
                    to summarize the topic of the section it precedes.
                    For instance this paragraph is preceded by the heading Heading Tags.
                    The font of the section headings are usually larger and bolder than their subsection headings.
                    This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc.
                    HTML heading tags can be used to format plain text so that it renders in a browser as large headings.
                    There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6.
                    Tag h1 is the largest heading and h6 is the smallest heading.
                </p>
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">
                    This is the first paragraph. The paragraph tag is used to format
                    vertical gaps between long pieces of text like this one.
                </p>
                <p id="wd-p-2">
                    This is the second paragraph. Even though there is a deliberate white
                    gap between the paragraph above and this paragraph, by default
                    browsers render them as one contiguous piece of text as shown here on
                    the right.
                </p>
                <p id="wd-p-3">
                    This is the third paragraph. Wrap each paragraph with the paragraph
                    tag to tell browsers to render the gaps.
                </p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered list tags</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                My favorite recipe:
                <ol id="wd-donuts">
                    <li>Prepare the dough.</li>
                    <li>Shape the donuts.</li>
                    <li>Fry the donuts.</li>
                    <li>Glaze the donuts.</li>
                </ol>
                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Your favorite books (in no particular order)
                <ul id="wd-your-books">
                    <li>The Catcher in the Rye</li>
                    <li>El ingenioso hidalgo don Quijote de la Mancha</li>
                    <li>Cien años de soledad</li>
                </ul>
            </div>
            <div id="wd-tables">
                <h4>Table tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>7/3/25</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>7/10/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>REACT</td>
                            <td>7/17/25</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>JAVASCRIPT</td>
                            <td>7/24/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>DATA</td>
                            <td>7/27/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>STATE</td>
                            <td>8/1/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>API</td>
                            <td>8/3/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>SERVER</td>
                            <td>8/7/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>DATABASE</td>
                            <td>8/10/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>FINAL PROJECT</td>
                            <td>8/15/25</td>
                            <td>90</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>90</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="ws-images">
                <h4>Image tag</h4>
                Loading image from Internet: <br />
                <img id="wd-starship" width="400px" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot" src="/images/teslabot.jpg" height="200px" />
            </div>
            <div id="wd-forms">
                <h4>Form elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input placeholder="Enter user name" id="wd-text-fields-username" /> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input type="password" placeholder="Enter password" id="wd-text-fields-password" value="123@#$asd" /> <br />
                    <label htmlFor="wd-text-fields-first-name">First name:</label>
                    <input type="text" title="FirstName" id="wd-text-fields-first-name"/> <br />
                    <label htmlFor="wd-text-fields-last-name">Last name:</label>
                    <input type="text" title="LastName" id="wd-text-fields-last-name" placeholder="Enter last name" value="Wonderland"/> <br />
                </form>
                <h5>Text boxes</h5>
                <label>Biography:</label> <br />
                <textarea id="wd-textarea" cols={30} rows={10} placeholder="Enter your biography">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </textarea>
            </div>
            <div id="wd-buttons">
                <h4>Buttons</h4>
                <button type="button" onClick={() => alert('Life is good!')} id="wd-all-good">Hello World!</button>

                <h5>Radio buttons</h5>
                <label>Favorite movie genre:</label> <br />
                <input type="radio" id="wd-radio-comedy" name="wd-radio-genre"/>
                <label htmlFor="wd-radio-comedy">Comedy</label> <br />
                <input type="radio" id="wd-radio-drama" name="wd-radio-genre"/>
                <label htmlFor="wd-radio-drama">Drama</label> <br />
                <input type="radio" id="wd-radio-scifi" name="wd-radio-genre"/>
                <label htmlFor="wd-radio-scifi">Science Fiction</label> <br />
                <input type="radio" id="wd-radio-fantasy" name="wd-radio-genre" />
                <label htmlFor="wd-radio-fantasy">Fantasy</label> <br />

                <h5>Checkboxes</h5>
                <label>Favorite movie genre:</label><br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
                <label htmlFor="wd-chkbox-comedy">Comedy</label><br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
                <label htmlFor="wd-chkbox-drama">Drama</label><br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

                <h4>Dropdowns</h4>
                <h5>Select one</h5>
                <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">
                        Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>

                <h5>Select many</h5>
                <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
                <select multiple id="wd-select-many-genre">
                    <option value="COMEDY" selected> Comedy          </option>
                    <option value="DRAMA">           Drama           </option>
                    <option value="SCIFI" selected> Science Fiction </option>
                    <option value="FANTASY">         Fantasy         </option>
                </select>
            </div>
            <div id="wd-other">
                <h4>Other HTML field types</h4>

                <label htmlFor="wd-text-fields-email"> Email: </label>
                <input type="email"
                    placeholder="your email here"
                    id="wd-text-fields-email" /><br />

                <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
                <input type="number"
                    placeholder="10000"
                    id="wd-text-fields-salary-start" /><br />

                <label htmlFor="wd-text-fields-rating"> Rating: </label>
                <input type="range"
                    max="5"
                    placeholder="Doe"
                    id="wd-text-fields-rating" /><br />

                <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
                <input type="date"
                    id="wd-text-fields-dob" /><br />
                
                <h4>Anchor tag</h4>
                Please
                <a href="https://www.lipsum.com" id="wd-lipsum"> click here </a>
                to get dummy text<br />
                Please
                <a href="https://github.com/fcges/RS2-react-web-app" id="wd-github"> click here </a>
                to reach my github repository
            </div>
        </div>
    );
}