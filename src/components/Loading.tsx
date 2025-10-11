function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                <svg
                    className="animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 50 50"
                >
                    <defs>
                        <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF97AD" />
                            <stop offset="100%" stopColor="#5171FF" />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        stroke="url(#grad)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray="100"
                        strokeDashoffset="60"
                    />
                </svg>
                <p className="text-gray-600 font-medium">Loading...</p>
            </div>
        </div>
    );
}

export default Loading;
