import Navbar from "../components/Navbar.tsx";
import { type FormEvent, useState } from "react";
import Uploader from "../components/Uploader.tsx";

function Upload() {
    const [isProcessing, _setIsProcessing] = useState(false);
    const [statusText, _setStatusText] = useState("");
    const [_file, setFile] = useState<File | null>(null);

    const handleFileSelect = (file: File | null) => {
        setFile(file);
    };

    const handleUploadResumeForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget.closest("form");

        if (!form) return;

        const formData = new FormData(form);

        const _companyName = formData.get("company-name");
        const _jobTitile = formData.get("job-title");
        const jobDescription = formData.get("job-description");
    };

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

                    {!isProcessing && (
                        <form
                            id="resume-upload-form"
                            className={"flex flex-col gap-4 my-8"}
                            onSubmit={handleUploadResumeForm}
                        >
                            <div className="form-div">
                                <label htmlFor="company-name">
                                    Company Name
                                </label>

                                <input
                                    id="company-name"
                                    type="text"
                                    name="company-name"
                                    placeholder="Company Name"
                                />
                            </div>

                            <div className="form-div">
                                <label htmlFor="job-title">Job Title</label>

                                <input
                                    id="cjob-title"
                                    type="text"
                                    name="job-title"
                                    placeholder="Job Title"
                                />
                            </div>

                            <div className="form-div">
                                <label htmlFor="job-description">
                                    Job Description
                                </label>

                                <textarea
                                    id="job-description"
                                    name="job-description"
                                    placeholder="Job Description"
                                    rows={5}
                                />
                            </div>

                            <div className="form-div">
                                <label htmlFor="upload-resume">
                                    Upload Resume
                                </label>

                                <Uploader onFileSelect={handleFileSelect} />
                            </div>

                            <button className={"primary-button"} type="submit">
                                Upload
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Upload;
