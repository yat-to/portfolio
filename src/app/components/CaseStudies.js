"use client";

import { useState } from "react";
import Image from "next/image";
import { caseStudies, personalInfo } from "@/data/portfolioData";
import ProjectDetailModal from "./ProjectDetailModal";
import { 
  FolderKanban, 
  MessageSquare,
  Eye,
  LayoutDashboard
} from "lucide-react";

export default function CaseStudies() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    { key: "all", label: "Semua" },
    { key: "enterprise", label: "Enterprise & Pemda" },
    { key: "saas", label: "SaaS & Bisnis" },
    { key: "edtech", label: "Edukasi" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? caseStudies
      : caseStudies.filter((p) => p.categoryKey === selectedFilter);

  return (
    <section id="studi-kasus" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Portofolio & Studi Kasus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Studi Kasus Sistem yang Telah Dirancang
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Ringkasan implementasi sistem nyata untuk efisiensi bisnis dan digitalisasi instansi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedFilter(tab.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedFilter === tab.key
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Simplified & Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const waProjectUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
              `Halo Mas Hidayat, saya tertarik dengan sistem *${project.title}*. Bisakah saya berdiskusi untuk proyek serupa?`
            )}`;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div>
                  {/* Card Thumbnail */}
                  {project.image ? (
                    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-slate-800 bg-slate-950">
                      <Image
                        src={project.image}
                        alt={`Preview ${project.title}`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="text-[10px] font-semibold text-emerald-300 bg-slate-900/90 backdrop-blur-md border border-emerald-800/60 px-2 py-0.5 rounded shadow">
                          {project.badge}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-slate-800 bg-slate-950/70 p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-slate-700 inline-block"></span>
                          <span className="w-2 h-2 rounded-full bg-slate-700 inline-block"></span>
                          <span className="w-2 h-2 rounded-full bg-slate-700 inline-block"></span>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-900/60 px-2 py-0.5 rounded">
                          {project.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <LayoutDashboard className="w-4 h-4 text-blue-400" />
                        <span className="font-mono text-slate-300 font-medium text-[11px] truncate">{project.client}</span>
                      </div>
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="mb-2">
                    <span className="text-[10px] font-semibold text-blue-400 bg-blue-950/70 border border-blue-900/60 px-2.5 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-300 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Short Summary (Ringkas & Padat) */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {project.summary}
                  </p>
                </div>

                {/* Card Footer: Tech Stack & Actions */}
                <div className="pt-4 border-t border-slate-800/80 mt-2">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detail</span>
                    </button>

                    <a
                      href={waProjectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                      title="Konsultasi proyek serupa via WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal Component */}
      <ProjectDetailModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
