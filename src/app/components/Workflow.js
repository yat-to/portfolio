"use client";

import { workflowSteps, valuePropositions } from "@/data/portfolioData";
import { 
  GitBranch, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function Workflow() {
  return (
    <section id="alur-kerja" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Transparansi & Metodologi Kerja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Alur Pengerjaan Sistem yang Terukur & Bebas Cemas
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Tidak ada kejutan atau pengerjaan tanpa arah. Setiap tahap didefinisikan dengan jelas, didukung demo progres berkala dan pengujian menyeluruh sebelum sistem dirilis ke publik.
          </p>
        </div>

        {/* 5-Step Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {workflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className={`rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Step Number & Phase Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-mono">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60">
                    {step.phase}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Hasil / Deliverables:
                </p>
                {step.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Work With Me (Value Propositions) */}
        <div className="mt-16 rounded-3xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Mengapa Klien & Instansi Memilih Bekerja Sama Dengan Saya?
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Kombinasi pola pikir analitis alur bisnis dengan standar rekayasa software modern untuk menghadirkan ketenangan bagi pemilik proyek.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePropositions.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-blue-400 font-mono mb-1">
                    {val.metric}
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {val.metricLabel}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

