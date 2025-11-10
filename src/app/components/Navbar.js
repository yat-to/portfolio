 "use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Data link navigasi
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Nama Brand */}
        <Link href="/" className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300">
          MyNextApp
        </Link>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Tombol Mobile Menu (Burger Icon) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:text-white"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              // Icon X (Tutup)
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Icon Hamburger (Buka)
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigasi Mobile (Tampil saat isOpen true) */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-1 px-2 pt-2 pb-3 bg-gray-700 rounded-md">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className="block text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)} // Tutup menu setelah klik link
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;