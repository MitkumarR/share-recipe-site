'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Community', href: '/community' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => pathname === href;

  const navLinkStyle = (href) =>
    `block px-4 py-2 text-lg font-medium transition-colors ${
      isActive(href)
        ? 'text-[#FAAF08]'
        : 'text-[#8F8F8F] hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent px-6 py-4 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Title (optional) */}
        <div className="text-xl font-bold text-[#FAAF08]">Share Recipe</div>

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
              <div className="absolute right-0 mt-2 w-40 rounded bg-white p-2 shadow-md z-10">
                <Link href="/contact" className="block px-4 py-2 text-[#8F8F8F] hover:bg-gray-100 hover:text-[#FAAF08]">Contact</Link>
                <Link href="/faq" className="block px-4 py-2 text-[#8F8F8F] hover:bg-gray-100 hover:text-[#FAAF08]">FAQ</Link>
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
            <div className="pl-4">
              <Link href="/contact" className="block px-4 py-2 text-[#8F8F8F] hover:bg-gray-100 hover:text-[#FAAF08]">Contact</Link>
              <Link href="/faq" className="block px-4 py-2 text-[#8F8F8F] hover:bg-gray-100 hover:text-[#FAAF08]">FAQ</Link>
            </div>
          )}
        </div>
      )}

    </nav>
  );
}
