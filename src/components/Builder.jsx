import { useState } from 'react';
import './Builder.css';

export function Builder() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        education: "",
        experience: "",
        skills: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Resume Data:", formData);
        alert("Resume generated! Check console for data.");
    };

        return (
            <div className="builder-container">
                <form onSubmit={handleSubmit}>
                    <h1>give your information </h1>
                    <br /><br />
                    <hr />

                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter you Full Name" />
                    <br /><br />
                    <hr />
                    <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter you email" />
                    <br /><br />
                    <hr />
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter you phone number" />
                    <br /><br />
                    <hr />
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter you address" />
                    <br /><br />
                    <hr />
                    <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Enter you education details" />
                    <br /><br />
                    <hr />
                    <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="Enter you experience details" />
                    <br /><br />
                    <hr />
                    <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Enter you skills details" />
                    <br />
                    <br />
                    <hr />
                    <button type="submit"> Generate Resume</button>

                </form>

            </div>
        )
    }