"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const waUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    "Halo Mas Hidayat, saya membaca portofolio Anda dan ingin berkonsultasi mengenai rencana pembuatan sistem/aplikasi web."
  )}`;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Subtle Dark Ambient Glow Background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Name, Description, CTA, and Stats Strip */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 w-fit mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Greeting & Headline matching reference layout */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Halo, Saya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
              Saya seorang <span className="text-slate-200 font-semibold">Full-Stack Software Engineer & System Architect</span>. Berfokus merancang sistem informasi terintegrasi, aplikasi bisnis web (SaaS), serta infrastruktur server yang tangguh, aman, dan siap skalabilitas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 text-base"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Konsultasi Sekarang</span>
              </a>

              <a
                href="#studi-kasus"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-white transition-all text-base"
              >
                <span>Lihat Studi Kasus</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 3-Column Stats Strip matching reference image */}
            <div className="w-full max-w-xl rounded-2xl bg-slate-900/80 border border-slate-800/90 p-4 sm:p-5 shadow-xl backdrop-blur-sm">
              <div className="grid grid-cols-3 divide-x divide-slate-800 text-center">
                {personalInfo.stats.map((stat, idx) => (
                  <div key={idx} className="px-3 sm:px-4">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Clean Large Portrait in Rounded Frame matching reference */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Soft Ambient Glow behind the card */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-50 pointer-events-none" />

              {/* Main Rounded Portrait Card */}
              <div className="relative rounded-[2.2rem] overflow-hidden bg-slate-900/90 border border-slate-800/80 p-3 sm:p-4 shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-[1.8rem] overflow-hidden bg-slate-950 flex items-center justify-center">
                  <Image
                    src="/images/profil.jpeg"
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle bottom gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Minimal Floating Role Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800 text-left">
                    <p className="text-xs font-bold text-white tracking-wide">
                      {personalInfo.name}
                    </p>
                    <p className="text-[11px] text-blue-400 font-medium">
                      {personalInfo.role}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
