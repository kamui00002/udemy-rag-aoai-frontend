import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-4xl font-medium">page not found</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
        Go back page
      </Link>
    </div>
  );
}