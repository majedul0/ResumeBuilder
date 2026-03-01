import './Demo.css';

export function Demo() {
    return (
        <div className="demo-container">
            <h1>Resume Demo</h1>

            <div className="resume-preview">
                <h2>John Doe</h2>
                <p>Email: john@example.com</p>
                <p>Phone: +123456789</p>

                <h3>Education</h3>
                <p>BSc in Computer Science – XYZ University</p>

                <h3>Skills</h3>
                <p>HTML, CSS, React, Node.js</p>
            </div>
        </div>
    )
}