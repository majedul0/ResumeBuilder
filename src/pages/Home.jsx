import { useNavigate } from "react-router-dom";
import { Builder } from "../components/Builder";
import './Home.css';

export function Home() {
    const navigate = useNavigate();
    const goToBuilder = () => {
        navigate("/builder");
    };
    const gotodemo = ()=>{
        navigate("/demo");
    }
    
    return (
        <>
            <div className="home-hero">
                <h1>ResumeBuilder</h1>
                <p>Build your resume in minutes with our easy-to-use resume builder. Create a professional resume that stands out to employers and land your dream job.</p>
                <p>ResumeBuilder helps students and professionals generate modern, ATS-friendly resumes with live preview and easy editing.</p>


            </div>
            <div className="home-actions">
                <button onClick={goToBuilder}>Create Resume</button>
                <button onClick={gotodemo}>View Demo</button>
            </div>




        </>
    )
}