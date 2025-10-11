import './App.css'
import Navbar from "./components/Navbar.tsx";
import {resumes} from "./constants";
import ResumeCard from "./components/ResumeCard.tsx";

function App() {

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <section className="main-section">
                <Navbar/>

                <div className="page-heading py-16 max-sm:py-4">
                    <h1>Stay Ahead in Your Job Hunt</h1>
                    <h2>Analyze, improve, and perfect your resume with smart AI feedback.</h2>
                </div>

                <div className="resumes-section">
                    {
                        resumes.map((resume: Resume, i: number) => (
                            <ResumeCard key={i} resume={resume}/>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default App
