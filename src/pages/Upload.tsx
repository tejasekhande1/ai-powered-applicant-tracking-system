import Navbar from "../components/Navbar.tsx";

function Upload() {
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <section className="main-section">
                <Navbar/>

                <div className="page-heading py-16 max-sm:py-4">
                    <h1>Smart feedback for your dream job</h1>
                </div>
            </section>
        </main>
    )
}

export default Upload;