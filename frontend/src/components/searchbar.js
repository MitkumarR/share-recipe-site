"use client"; // if using app directory, keep this

import { Search } from "lucide-react"; // or use your own icon

export default function SearchBar() {
  return (
    <div className="w-full max-w-xl mx-auto mt-6 px-4">
      <div className="relative">
        
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-full py-3 px-5 pl-12 border border-white/70 bg-transparent text-yellow-300  placeholder-white focus:border-2 focus:outline-none "
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
      </div>
    </div>
  );
}
