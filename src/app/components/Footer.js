"use client";

import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { 
  ArrowUp, 
  Terminal, 
  PhoneCall, 
  Mail, 
  Heart,
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md">
                {personalInfo.monogram}
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  {personalInfo.brandName}
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  {personalInfo.name}
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm max-w-md">
              Full-Stack Software Engineer & System Architect berdedikasi membangun sistem informasi tangguh, modular, dan siap produksi untuk instansi pemerintah, UMKM, dan korporasi.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigasi Halaman
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#hero" className="hover:text-blue-400 transition-colors">
                  Beranda (Hero & Profil)
                </a>
              </li>
              <li>
                <a href="/#layanan" className="hover:text-blue-400 transition-colors">
                  Layanan & Solusi Rekayasa
                </a>
              </li>
              <li>
                <a href="/#studi-kasus" className="hover:text-blue-400 transition-colors">
                  Studi Kasus & Portofolio
                </a>
              </li>
              <li>
                <a href="/#alur-kerja" className="hover:text-blue-400 transition-colors">
                  Alur Kerja & Metodologi
                </a>
              </li>
              <li>
                <a href="/#kontak" className="hover:text-blue-400 transition-colors">
                  Konsultasi & Kontak Langsung
                </a>
              </li>
            </ul>
          </div>

          {/* Core Specializations */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Fokus Keahlian
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Next.js App Router",
                "React & Redux",
                "Vue.js & Quasar",
                "Node.js & Express",
                "NestJS",
                "PostgreSQL & MySQL",
                "Prisma ORM",
                "RESTful API & OpenAPI",
                "QRIS Payment Gateway",
                "WhatsApp API Gateway",
                "Ubuntu Linux VPS",
                "Nginx Reverse Proxy",
                "SSL / TLS Hardening",
                "Docker Containers",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name} ({personalInfo.brandName}). Seluruh hak cipta dilindungi.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
