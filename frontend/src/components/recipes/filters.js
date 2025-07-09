"use client";

import { useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Build filters object from URL params
  const filters = {};
  ["region", "session", "type", "category"].forEach((key) => {
    const value = searchParams.get(key);
    if (value) filters[key] = value;
  });

  const handleClearFilters = () => {
    router.push("/recipes");
  };

  if (Object.keys(filters).length === 0) {
    return null;
  }

  return (
    <div className="flex gap-2 flex-wrap mt-4 text-sm items-center">
      {filters.region && (
        <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
          <strong className="text-yellow-700">Region:</strong> {filters.region}
        </span>
      )}
      {filters.session && (
        <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
          <strong className="text-yellow-700">Session:</strong> {filters.session}
        </span>
      )}
      {filters.type && (
        <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
          <strong className="text-yellow-700">Type:</strong> {filters.type}
        </span>
      )}
      {filters.category && (
        <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
          <strong className="text-yellow-700">Category:</strong> {filters.category}
        </span>
      )}
      <button
        onClick={handleClearFilters}
        className="flex items-center gap-1 bg-yellow-500 text-black px-3 py-1 rounded-full hover:bg-yellow-600 transition"
      >
        <X size={16} /> Clear All
      </button>
    </div>
  );
}
