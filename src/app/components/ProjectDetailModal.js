"use client";

import { useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  MessageSquare,
  Building,
  Layers,
  TrendingUp,
  ShieldCheck,
  ImageIcon
} from "lucide-react";

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const waConsultUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    `Halo Mas Hidayat, saya baru saja membaca studi kasus *${project.title}* di website Anda. Saya berencana membangun sistem dengan karakteristik serupa. Apakah bisa berdiskusi lebih lanjut?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      {/* Backdrop Click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-900/60 text-blue-300 border border-blue-700/60">
              {project.badge}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Tutup modal studi kasus"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Client Banner */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              <Building className="w-4 h-4" />
              <span>Target Klien: {project.client}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Screenshot Preview if available */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950">
              <div className="px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-2 font-sans font-medium text-slate-300">
                  <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
                  Pratinjau Antarmuka & Dashboard Sistem
                </span>
                <span className="text-[11px] text-emerald-400">Live Production Preview</span>
              </div>
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <Image
                  src={project.image}
                  alt={`Screenshot ${project.title}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          )}

          {/* Quick Summary Box */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-300 leading-relaxed">
            <p className="font-semibold text-white mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Ringkasan Eksekutif:</span>
            </p>
            {project.summary}
          </div>

          {/* Problem vs Solution Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Problem */}
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-900/40">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm mb-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>Tantangan & Masalah Lapangan</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Solusi Arsitektur yang Diterapkan</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>Poin Fitur & Modul Utama</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/50 border border-slate-800/80 text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Engineering Approach */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-sky-400" />
              <span>Pendekatan Rekayasa Sistem & Data</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Business Impact / KPI */}
          <div className="p-5 rounded-xl bg-blue-950/30 border border-blue-800/50">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>Dampak Bisnis & Efisiensi Operasional</span>
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed font-medium">
              {project.impact}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Teknologi yang Digunakan:
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Butuh konsultasi untuk membuat sistem serupa dengan spesifikasi Anda?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              Tutup
            </button>
            <a
              href={waConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/30 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-blue-200" />
              <span>Diskusi Proyek Serupa via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
