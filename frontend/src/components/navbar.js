"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import Logo from "@/assets/logo.svg"; // Adjust the path as necessary'

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  
  const [navDark, setNavDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavDark(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const darkSection = document.getElementById("dark-section");
    if (darkSection) observer.observe(darkSection);

    return () => {
      if (darkSection) observer.unobserve(darkSection);
    };
  }, []);
  
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => pathname === href;

  const navLinkStyle = (href) =>
    `block px-4 py-2 text-lg font-medium transition-colors ${
      isActive(href) ? "text-[#FAAF08]" : `text-[#8F8F8F] ${navDark ? "hover:text-black" : "hover:text-white"}`
    }`;


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent px-6 py-4 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Title (optional) */}
        <div className="flex items-center space-x-4 w-auto h-auto">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={navLinkStyle(link.href)}
            >
              {link.name}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="text-lg font-medium text-[#8F8F8F] hover:text-white"
            >
              More
            </button>
            {showMore && (
              <div className="absolute right-0 mt-2 w-40 rounded p-2 z-10 bg-transparent backdrop-blur-md">
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-[#8F8F8F]  hover:text-[#FAAF08]"
                >
                  Contact
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-[#8F8F8F] hover:text-[#FAAF08]"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#8F8F8F] hover:text-[#FAAF08] focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-2 flex flex-col md:hidden space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={navLinkStyle(link.href)}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="text-left px-4 py-2 text-lg font-medium text-[#8F8F8F] hover:text-white"
          >
            More
          </button>
          {showMore && (
            <div className="pl-4 backdrop-blur-md">
              <Link
                href="/contact"
                className="block px-4 py-2 text-[#8F8F8F] hover:text-[#FAAF08]"
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-2 text-[#8F8F8F]  hover:text-[#FAAF08]"
              >
                FAQ
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
