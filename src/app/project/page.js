import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "Studi Kasus & Portofolio Rekayasa Sistem | Hidayat.dev",
  description:
    "Eksplorasi mendalam studi kasus sistem informasi instansi, aplikasi kasir SaaS multi-cabang, self-order QR restoran, dan platform digital interaktif oleh Muhammad Hidayat Darmawan.",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
