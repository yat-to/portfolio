"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageSquare, 
  Layers, 
  Briefcase, 
  Workflow, 
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/#hero" },
    { name: "Layanan", href: "/#layanan" },
    { name: "Studi Kasus", href: "/#studi-kasus" },
    { name: "Alur Kerja", href: "/#alur-kerja" },
    { name: "Kontak", href: "/#kontak" },
  ];

  const waUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    "Halo Mas Hidayat, saya tertarik untuk konsultasi pengembangan sistem/aplikasi web. Apakah ada waktu untuk berdiskusi?"
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/80 py-3"
          : "bg-slate-900/70 backdrop-blur-sm border-b border-slate-800/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Monogram */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              {personalInfo.monogram}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {personalInfo.brandName}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline-block font-medium">
                Software Engineer & System Architect
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-800/50 p-1.5 rounded-full border border-slate-700/60 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-700/70 transition-all duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-blue-200" />
              <span>Konsultasi Proyek</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 text-xs font-semibold flex items-center gap-1 shadow-sm"
              title="Konsultasi WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700/80 transition-colors focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-5 bg-slate-900/95 border-b border-slate-800/90 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800/90 transition-all font-medium text-base flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/30"
              >
                <MessageSquare className="w-5 h-5 text-blue-200" />
                <span>Konsultasi Proyek via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
