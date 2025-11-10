"use client";
import Image from 'next/image';

const projects = [
   {
      title: "PERAK KONSEL",
      description: "Aplikasi monitoring pengadaan daerah yang terintegrasi dengan sistem LKPP (SIRUP dan LPSE).",
      image: "/images/project/perak.png",
      tech: ["Vue.js", "Node.js", "MySQL"],
      link: "https://adminperak.konaweselatankab.go.id/",
   },
   {
      title: "SIKOLA PINDARA",
      description: "Aplikasi inventarisasi aset daerah dengan fitur pelaporan, pemetaan, dan visualisasi data aset.",
      image: "/images/project/sikola-pindara.png",
      tech: ["React", "Redux", "Express"],
      link: "https://sikola-pindara.konaweselatankab.go.id/",
   },
   {
      title: "GaLi Integral",
      description: "Aplikasi pembelajaran interaktif berbasis web untuk membantu siswa memahami konsep integral.",
      image: "/images/project/gali-integral.png",
      tech: ["Vue.js", "TailwindCSS"],
      link: "https://gali-integral.konaweselatankab.go.id/",
   },
];

export default function Project() {
   return (
      <div>
         <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
               <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                     <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
                     >
                        <div className="relative w-full h-48">
                           <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                           />
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                           <h3 className="text-xl font-semibold mb-2">
                              {project.title}
                           </h3>
                           <p className="text-gray-600 flex-1">{project.description}</p>

                           <div className="mt-4 flex flex-wrap gap-2">
                              {project.tech.map((tech, i) => (
                                 <span
                                    key={i}
                                    className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                                 >
                                    {tech}
                                 </span>
                              ))}
                           </div>

                           <a
                              href={project.link}
                              target="_blank"
                              className="mt-5 inline-block text-center bg-blue-300 hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition"
                           >
                              View Project
                           </a>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   )
}