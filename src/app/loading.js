export default function loading() {
    return (
        //make a loading scaliton using tailwind

        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-16 h-16 mb-4 rounded-full bg-gray-300 animate-bounce"></div>
            <div className="text-xl font-semibold">Loading...</div>
        </div>

    )
}