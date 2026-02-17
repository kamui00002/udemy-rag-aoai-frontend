"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-8xl font-bold">Error</h1>
      <p className="text-4xl font-medium">Unexpected Error Occurred</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
        Go Back Page
      </Link>
    </div>
  );
}
