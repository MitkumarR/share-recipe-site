"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-gray-500">{error?.message || "Unexpected error occurred."}</p>
      <button onClick={() => reset()} className="mt-4 bg-yellow-500 px-4 py-2 rounded text-black">Try Again</button>
    </div>
  );
}