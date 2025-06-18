"use client";

import React from "react";
import "./globals.css";
import SearchBar from "@/components/searchbar";
import { useRef, useEffect } from "react";

// Importing icons
import {
  IoShareSocialOutline,
  IoBookmarkOutline,
  IoShareSocialSharp,
  IoBookmarkSharp,
} from "react-icons/io5";

import ChefCuate from "@/assets/chef-cuate.svg"; // Adjust the path as necessary
import EatingDonutsCuate from "@/assets/Eating donuts-cuate.svg"; // Adjust the path as necessary

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

      {/* Scrollable Cards Section */}
      <section className="w-full h-auto mt-25 text-center">
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

        <div className="mt-20 h-50 items-center">
          <div className="relative w-full flex justify-center">
            {/* Yellow Border Layer (back layer) */}
            <div className="w-full border-t-2 border-b-2 border-yellow-500 h-30 z-0"></div>

            {/* Content Overlay (front layer) */}
            <div className="absolute top-1/2 -translate-y-1/2 z-10 max-w-5xl w-full p-6 flex flex-col md:flex-row justify-between items-center ">
              {/* Paragraph */}

              <div className="bg-white p-3 items-center h-auto mt-20 md:mt-0">
                <p className="text-yellow-500 text-center md:text-left md:max-w-md text-xl md:text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  vel eum iure sit odit, commodi soluta aspernatur eligendi sint
                  nobis placeat rem laudantium veritatis alias odio aliquam
                  praesentium similique debitis?
                </p>
              </div>

              {/* Buttons */}

              <div className="bg-white p-2 w-70 flex justify-center space-x-4 mt-8 md:mt-0">
                {/* Show Recipe Button with Animation */}
                <button className="relative group bg-yellow-500 text-white px-6 py-2 rounded-md  overflow-hidden transition-all duration-300 hover:border hover:border-yellow-500 hover:bg-white hover:text-yellow-500">
                  <span className="relative z-10">Show Recipe</span>
                  <span className="absolute left-0 top-0 h-full w-full bg-white text-yellow-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                </button>

                {/* Share Button with Yellow Border on Hover */}
                <button
                  className="group p-2 rounded-md border border-yellow-500 transition duration-300 hover:bg-yellow-500"
                  title="Share"
                >
                  <span className="block text-yellow-500 group-hover:hidden">
                    <IoShareSocialOutline size={20} />
                  </span>
                  <span className="hidden text-white group-hover:block">
                    <IoShareSocialSharp size={20} />
                  </span>
                </button>

                {/* Bookmark Button */}
                <button
                  className="group p-2 rounded-md border border-yellow-500 transition duration-300 hover:bg-yellow-500"
                  title="Bookmark"
                >
                  <span className="block text-yellow-500 group-hover:hidden">
                    <IoBookmarkOutline size={20} />
                  </span>
                  <span className="hidden text-white group-hover:block">
                    <IoBookmarkSharp size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <ChefCuate className="w-[80vw] max-w-md h-auto object-contain" />
        </div>
      </section>

      {/* Wave Section */}

      <section className="w-full h-auto mt-10 ">
        {/* SVG Wave */}
        <div className="flex justify-center w-full">
          <svg
            viewBox="0 0 1717 211"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M445.322 158.698C273.381 240.067 0 99.383 0 99.383V210.5H1801.5V77.5545C1749.63 46.8135 1531.07 40.469 1326.84 99.383C1169.84 144.669 1092.51 82.6536 921.075 18.0143C749.641 -46.6249 617.262 77.33 445.322 158.698Z"
              fill="#1E1E1E"
            />
          </svg>
        </div>

        {/* Section Content */}
        <div className="-mt-1 px-6 md:px-12 h-auto bg-[#1E1E1E]">
          <div className="py-5 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div className="relative border-2 border-yellow-500 p-4 pt-8 rounded-2xl w-4xs max-w-2xs h-50 bg-[#1E1E1E]">
              {/* Fake border cover for the gap */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 py-2 w-52 bg-[#1E1E1E] z-10">
                <h3 className="font-bold text-3xl text-[#FEF3E2]">Breakfast</h3>
              </div>

              {/* Paragraph content */}
              <p className="text-gray-400 text-sm mt-8">
                A paragraph is a series...
              </p>
            </div>

            <div className="relative border-2 border-yellow-500 p-4 pt-8 rounded-2xl w-4xs max-w-2xs h-50 bg-[#1E1E1E]">
              {/* Fake border cover for the gap */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 py-2 w-52 bg-[#1E1E1E] z-10">
                <h3 className="font-bold text-3xl text-[#FEF3E2]">Lunch</h3>
              </div>

              {/* Paragraph content */}
              <p className="text-gray-400 text-sm mt-8">
                A paragraph is a series...
              </p>
            </div>

            <div className="relative border-2 border-yellow-500 p-4 pt-8 rounded-2xl w-4xs max-w-2xs h-50 bg-[#1E1E1E]">
              {/* Fake border cover for the gap */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 py-2 w-52 bg-[#1E1E1E] z-10">
                <h3 className="font-bold text-3xl text-[#FEF3E2]">Dinner</h3>
              </div>

              {/* Paragraph content */}
              <p className="text-gray-400 text-sm mt-8">
                A paragraph is a series...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-16 px-6 md:px-20 bg-[#1E1E1E]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-400 mb-6">
            Save your favorite recipes, share your own culinary creations, and
            connect with fellow food lovers. Log in to unlock full features and
            personalize your recipe experience.
          </p>

          <button className="bg-yellow-500 hover:border hover:border-white text-white hover:bg-transparent font-semibold px-8 py-3 rounded-lg transition duration-300">
            Sign In to Your Account
          </button>
        </div>
      </section>

      <section className="w-full px-6 md:px-20 py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Form */}
          <div className="space-y-6">
            <p className="text-lg text-center md:text-left text-black">
              A paragraph is a series of sentences that longer than a few
              sentences should
            </p>

            {/* Email Input */}
            <div className="flex items-center py-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-md mr-2" />
              <span className="text-gray-400 mr-2"></span>
              <input
                type="email"
                placeholder="@email"
                className="outline-none w-full bg-transparent placeholder-gray-400 text-[#1E1E1E]"
                onFocus={className => className.target.classList.add('outline-none')}
              />
            </div>

            {/* Feedback Input */}
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 placeholder-gray-400 text-[#1E1E1E]"
              placeholder="Write your feedback here ..."
            ></textarea>

            {/* Send Button */}
            <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-md font-medium hover:bg-yellow-500 hover:text-white transition flex items-center gap-2">
              Send
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Side: Illustration */}
          <div className="flex justify-center">
            {/* Replace with your own SVG component or <img src="" /> */}
            <EatingDonutsCuate className="w-[80vw] max-w-md h-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
