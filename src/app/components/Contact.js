"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { 
  Send, 
  MessageSquare, 
  Mail, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    serviceType: "Aplikasi Bisnis / POS SaaS",
    description: "",
  });

  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Mas Hidayat, perkenalkan saya *${formData.name || "Klien"}*.
Kontak/Email: ${formData.contact || "-"}
Jenis Kebutuhan: *${formData.serviceType}*
Deskripsi Kebutuhan:
${formData.description || "Saya ingin berdiskusi mengenai proyek aplikasi/sistem."}`;

    const url = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <section id="kontak" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/60 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Mulai Diskusi Proyek</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Siap Mewujudkan Sistem Informasi atau Aplikasi Bisnis Anda?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Konsultasikan alur operasional dan rancangan sistem Anda secara gratis. Saya siap membantu memetakan kebutuhan teknis hingga estimasi biaya dan waktu yang realistis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Kontak Cepat & Langsung
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Lebih suka diskusi langsung tanpa formulir? Hubungi saya melalui channel preferensi Anda:
              </p>

              {/* Channels List */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
                    "Halo Mas Hidayat, saya ingin berkonsultasi mengenai rencana pembuatan sistem baru."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-400 font-medium">WhatsApp (Fast Response)</p>
                      <p className="text-sm font-semibold text-white">{personalInfo.whatsappDisplay}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Email */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-400 font-medium">Email Resmi</p>
                      <p className="text-sm font-semibold text-white">{personalInfo.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-800/60 transition-colors"
                  >
                    {isCopied ? "Tersalin!" : "Salin"}
                  </button>
                </div>

                {/* Social Profiles */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Consultation Guarantee Badge */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Konsultasi & Brainstorming Awal 100% Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Kerahasiaan Alur Bisnis (NDA Ready) Terjaga</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Low-Friction Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Kirimkan Ringkasan Kebutuhan Anda
                </h3>
                <p className="text-sm text-slate-400">
                  Isi formulir ringkas berikut, pesan akan otomatis terhubung langsung ke WhatsApp saya untuk diskusi cepat.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nama */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Contoh: Budi Santoso (CV Maju Jaya / Dinas X)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Kontak / WA */}
                <div>
                  <label htmlFor="contact" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Nomor WhatsApp / Email
                  </label>
                  <input
                    type="text"
                    id="contact"
                    required
                    placeholder="Contoh: 0812-XXXX-XXXX atau email@perusahaan.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Jenis Kebutuhan Sistem */}
                <div>
                  <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Kategori Kebutuhan Sistem
                  </label>
                  <select
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Aplikasi Bisnis / POS SaaS">Aplikasi Bisnis Kustom / SaaS (POS Kasir, Reservasi, dll)</option>
                    <option value="Sistem Informasi Instansi / Pemda">Sistem Informasi Sektor Publik / Instansi (Aset, Monitoring, dll)</option>
                    <option value="Integrasi API & Payment Gateway">Integrasi API, Webhook & Payment Gateway (QRIS, WhatsApp Gateway)</option>
                    <option value="Deployment VPS, Nginx & Keamanan Server">Deployment VPS, Nginx & Pengamanan Server</option>
                    <option value="Konsultasi Arsitektur & Rekayasa Lainnya">Konsultasi Arsitektur / Kebutuhan Lainnya</option>
                  </select>
                </div>

                {/* Deskripsi Singkat */}
                <div>
                  <label htmlFor="description" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Deskripsi Singkat / Masalah yang Ingin Diselesaikan
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Ceritakan gambaran sistem yang ingin dibangun atau masalah operasional yang saat ini dihadapi..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>Kirim & Lanjutkan Diskusi via WhatsApp</span>
                </button>

                <p className="text-center text-xs text-slate-500 pt-2">
                  Tombol ini akan otomatis merangkum data Anda dan membuka percakapan WhatsApp langsung dengan saya.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
