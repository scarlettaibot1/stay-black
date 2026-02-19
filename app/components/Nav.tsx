'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { href: '/products', label: 'Products' },
  { href: '/materials', label: 'Materials' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" className="text-lg font-bold tracking-[0.3em] hover:text-gray-300 transition-colors">
          STAY BLACK
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-[0.15em] uppercase text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/#waitlist"
            className="text-xs tracking-[0.15em] uppercase border border-white/20 text-white px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-300"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 border-t border-white/10' : 'max-h-0'}`}>
        <ul className="px-6 py-6 flex flex-col gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-[0.15em] uppercase text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#waitlist"
              className="inline-block text-xs tracking-[0.15em] uppercase border border-white/20 text-white px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
