"use client";

import React from "react";
import "./globals.css";
import SearchBar from "@/components/searchbar";
import { useRef, useEffect } from "react";

// Importing icons
import { IoShareSocialOutline, IoBookmarkOutline } from "react-icons/io5";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center -mt-20" // Adjust this value
        style={{ backgroundImage: "url('/home-image.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content on top */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl font-bold text-white">Welcome to My App</h1>
          <SearchBar />
          <p className="text-xl text-white mt-2">
            A paragraph is a series of sentences that longer than a few
            sentences should be organized into paragraphs.
          </p>
        </div>
      </section>

      <section className="w-full py-10 bg-white text-center">
        {/* Title Bar */}
        <div>
          <h2 className="relative -bottom-5 text-3xl font-semibold text-black">
            WORLD’S
          </h2>
          <div className="w-full h-15 bg-yellow-500 py-4 flex flex-col items-center justify-center text-center">
            <p className="text-white text-lg">FAVOURIT</p>
          </div>
        </div>
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 px-4 pb-4 mt-5 scrollbar-hide"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="min-w-[350px] h-50 bg-gray-300 rounded-lg flex-shrink-0"
            >
              {/* Placeholder for dish image */}
            </div>
          ))}
        </div>

        <div className="relative w-full mt-10 flex justify-center">
          {/* Yellow Border Layer (back layer) */}
          <div className="w-full border-t-2 border-b-2 border-yellow-500 h-30 z-0"></div>

          {/* Content Overlay (front layer) */}
          <div className="absolute top-1/2 -translate-y-1/2 bg-white z-10 max-w-5xl w-full px-6 py-6 flex flex-col md:flex-row justify-between items-center ">
            {/* Paragraph */}
            <p className="text-yellow-500 text-left md:max-w-md text-sm md:text-base">
              A paragraph is a series of sentences that longer than a few
              sentences should be organized into paragraphs.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-md font-semibold">
                Show Recipe
              </button>
              <button className="border border-yellow-500 p-2 rounded-md text-yellow-500">
                <IoShareSocialOutline />
              </button>
              <button className="border border-yellow-500 p-2 rounded-md text-yellow-500">
                <IoBookmarkOutline />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
