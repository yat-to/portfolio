
export default function Hero() {
   return (
      <div className="grid grid-cols-12 gap-3 mt-3">
         <div className="col-span-12 md:col-span-6 p-4 text-wrap flex flex-col items-center justify-center">
            <p className="text-lg font-bold">Power Ranger Merah</p>
            <p className="text-lg">Power Ranger Merah adalah pemimpin utama dalam setiap tim Power Rangers. Ia biasanya digambarkan sebagai sosok yang berani, tegas, dan penuh semangat juang. Sebagai pemimpin, Power Ranger Merah bertanggung jawab memimpin rekan-rekannya dalam melawan kejahatan dan menjaga kedamaian bumi. Kostumnya identik dengan warna merah menyala dan sering kali ia memiliki Zord terkuat atau paling ikonik dalam timnya. Tokoh ini melambangkan keberanian, kepemimpinan, dan semangat pantang menyerah.</p>
         </div>

         <div className="col-span-12 md:col-span-6 flex justify-center">
            <div className="bg-green-200 w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
               <img
                  src="/images/profil.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
               />
            </div>
         </div>
      </div>
   )
}
