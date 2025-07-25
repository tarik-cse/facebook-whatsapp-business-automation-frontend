export default function Redirect({text}: {text: string}) {
    return (
        <div className="flex h-screen items-center justify-center bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center space-y-4">
                <svg
                    className="animate-spin h-8 w-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                    />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                    {text}...
                </p>
            </div>
        </div>
    )
}