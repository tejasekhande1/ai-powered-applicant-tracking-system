import { usePuterStore } from "../lib/puter.ts";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Auth() {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next]);

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <div className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#FF97AD] to-[#5171FF] bg-clip-text text-transparent">
                            {auth.isAuthenticated ? "Welcome Back!" : "Welcome"}
                        </h1>
                        <h2 className="text-gray-600 text-lg font-medium">
                            {auth.isAuthenticated
                                ? "You're all set to explore opportunities and move your career forward."
                                : "Log in to continue your journey toward your dream job."}
                        </h2>
                    </div>

                    <div>
                        {isLoading ? (
                            <button
                                className="auth-button animate-pulse"
                                disabled
                            >
                                <p>Signing you in...</p>
                            </button>
                        ) : auth.isAuthenticated ? (
                            <button
                                className="auth-button w-full"
                                onClick={auth.signOut}
                            >
                                Log Out
                            </button>
                        ) : (
                            <button
                                className="auth-button w-full"
                                onClick={auth.signIn}
                            >
                                Log In
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Auth;
