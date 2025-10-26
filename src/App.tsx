import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import Home from "./pages/Home.tsx";
import Auth from "./pages/Auth.tsx";
import { usePuterStore } from "./lib/puter.ts";
import { useEffect } from "react";
import Loading from "./components/Loading.tsx";
import Upload from "./pages/Upload.tsx";

function App() {
    const { init, isLoading } = usePuterStore();

    useEffect(() => {
        init();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/upload" element={<Upload />} />
        </Routes>
    );
}

export default App;
