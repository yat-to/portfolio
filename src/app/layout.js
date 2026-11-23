import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Muhammad Hidayat Darmawan | Full-Stack Software Engineer & System Architect",
  description:
    "Jasa perancangan dan pembuatan sistem informasi, aplikasi web bisnis (SaaS / POS), integrasi API LKPP & QRIS Payment Gateway, serta konfigurasi server produksi yang aman dan teruji.",
  keywords: [
    "Full-Stack Software Engineer",
    "System Architect",
    "Jasa Pembuatan Sistem Informasi",
    "Jasa Aplikasi Web Next.js",
    "Integrasi API LKPP LPSE",
    "Aplikasi Kasir POS Multi Cabang",
    "QRIS Payment Gateway Integration",
    "Muhammad Hidayat Darmawan",
    "Hidayat.dev",
  ],
  authors: [{ name: "Muhammad Hidayat Darmawan" }],
  openGraph: {
    title: "Hidayat.dev | Full-Stack Software Engineer & System Architect",
    description:
      "Membangun Sistem Informasi & Aplikasi Web yang Tangguh, Terintegrasi, dan Siap Skalabilitas.",
    url: "https://hidayat.dev",
    siteName: "Hidayat.dev",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
