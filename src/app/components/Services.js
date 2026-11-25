"use client";

import { services, personalInfo } from "@/data/portfolioData";
import { 
  Laptop, 
  Building2, 
  ServerCog, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles
} from "lucide-react";

export default function Services() {
  const getServiceIcon = (id) => {
    switch (id) {
      case "custom-saas":
        return <Laptop className="w-6 h-6 text-blue-400" />;
      case "enterprise-public-sector":
        return <Building2 className="w-6 h-6 text-indigo-400" />;
      case "integration-server-security":
        return <ServerCog className="w-6 h-6 text-emerald-400" />;
      default:
        return <Laptop className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="layanan" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/60 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keahlian & Layanan Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Solusi Rekayasa Software dari Skala Bisnis hingga Sektor Publik
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Menghadirkan 3 pilar layanan utama untuk membantu operasional bisnis, instansi pemerintahan, dan kehandalan infrastruktur server Anda.
          </p>
        </div>

        {/* 3 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const waConsultUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
              `Halo Mas Hidayat, saya tertarik mendiskusikan layanan: *${service.title}*. Bisakah kita jadwalkan sesi konsultasi?`
            )}`;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/30 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400/90 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/80">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & CTA */}
                <div className="pt-5 border-t border-slate-800/80 mt-2">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={waConsultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Konsultasikan Kebutuhan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
