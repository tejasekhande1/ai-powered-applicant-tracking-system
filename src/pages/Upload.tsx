import Navbar from "../components/Navbar.tsx";
import { useState } from "react";

function Upload() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState("");
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <section className="main-section">
                <Navbar />

                <div className="page-heading py-16 max-sm:py-4">
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2 className="mt-4 text-xl font-medium text-gray-700 animate-pulse">
                                {statusText ||
                                    "Analyzing your resume... please wait"}
                            </h2>
                            <img
                                className="w-full max-w-md mx-auto mt-6"
                                src="/images/resume-scan.gif"
                                alt="Resume scanning animation"
                            />
                        </>
                    ) : (
                        <>
                            <h2 className="mt-4 text-lg text-gray-700">
                                Upload your resume to get an instant{" "}
                                <span className="font-semibold">ATS score</span>
                                , actionable insights, and{" "}
                                <span className="font-semibold">
                                    personalized tips
                                </span>{" "}
                                to make your application stand out.
                            </h2>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Upload;
