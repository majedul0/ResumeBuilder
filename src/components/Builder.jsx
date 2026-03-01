import './Builder.css';

export function Builder() {
    return (
        <div className="builder-container">
            <form action="#">
                <h1>give your information </h1>
                <br /><br />
                <hr />

                <input type="text" placeholder="Enter you Full Name" />
                <br /><br />
                <hr />
                <input type="text" placeholder="Enter you email" />
                <br /><br />
                <hr />
                <input type="text" placeholder="Enter you phone number" />
                <br /><br />
                <hr />
                <input type="text" placeholder="Enter you address" />
                <br /><br />
                <hr />
                <input type="text" placeholder="Enter you education details" />
                <br /><br />
                <hr />
                <input type="text" placeholder="Enter you experience details" />
                <br /><br />
                <hr />
                <input type="text" placeholder="Enter you skills details" />
                <br />
                <br />
                <hr />
                <button type="submit"> Generate Resume</button>

            </form>

        </div>
    )
}