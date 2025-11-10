import Image from 'next/image'

export default function Hero() {
   return (
      <div className="mx-auto grid grid-cols-12 gap-3 mt-3 p-8 shadow-lg items-center">
         <div className="col-span-12 md:col-span-6 p-4 text-wrap flex flex-col items-center justify-center">
            <p className="text-lg font-bold">MUHAMMAD HIDAYAT DARMAWAN</p>
            <p className=" mt-5">
               I’m a frontend developer who enjoys turning ideas into beautiful and functional digital experiences. I’m passionate about learning new things, improving my skills, and bringing creativity into every project I work on.
            </p>
         </div>

         <div className="col-span-12 md:col-span-6 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
               <Image
                  src="/images/profil.jpeg"
                  alt="Logo"
                  width={256}
                  height={256}
                  className="object-cover"
               />
            </div>
         </div>
      </div>
   )
}
