"use client";
import Image from 'next/image';

const projects = [
   {
      title: "PERAK KONSEL",
      description: "The application provides online public services, including job seeker registration (AK1 Card), document management, and other administrative services. It aims to simplify public access to government services through a centralized and user-friendly web portal, supporting efficiency, transparency, and digital transformation within the local government.",
      image: "/images/project/perak.png",
      tech: ["Vue.js", "Node.js", "MySQL", "Quasar"],
      link: "https://adminperak.konaweselatankab.go.id/",
   },
   {
      title: "SIKOLA PINDARA",
      description: "is an integrated education management system developed by the Department of Education and Culture of Konawe Selatan Regency, Indonesia. The platform aims to digitize and streamline local education services by managing data for schools, teachers, and education staff. It supports transparency, efficiency, and accountability in regional education governance through a centralized digital system.",
      image: "/images/project/sikola-pindara.png",
      tech: ["Vue.js", "Node.js", "MySQL", "Quasar"],
      link: "https://sikola-pindara.konaweselatankab.go.id/",
   },
   {
      title: "GaLi Integral",
      description: "GaLi INTEGRAL is a data integration platform developed to unify information from multiple government applications in Konawe Selatan Regency. Built with Vue.js (frontend), Node.js (backend), and MySQL (database), it enables efficient synchronization, processing, and visualization of inter-system data. The application supports better decision-making, transparency, and interoperability across various regional information systems.",
      image: "/images/project/gali-integral.png",
      tech: ["Vue.js", "Node.js", "MySQL", "Quasar"],
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