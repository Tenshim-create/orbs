import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Angel Number Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The angel number you're looking for doesn't exist in our database.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
