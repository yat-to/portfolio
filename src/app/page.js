import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Workflow from "./components/Workflow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <Services />

      {/* 3. Case Studies Section */}
      <CaseStudies />

      {/* 4. Workflow & Value Proposition */}
      <Workflow />

      {/* 5. Contact Section */}
      <Contact />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
