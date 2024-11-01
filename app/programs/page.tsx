import MapComponent from '@/components/MapComponent';
import Programs from '@/components/ProgramInfo'

export default function ProgramsPage() {
   return (
      <div className="bg-gray-50">
         <section className="py-16 px-6 text-black">
            <Programs />
         </section>

         {/* Interactive Map */}
         <section className="py-16 px-6 text-black bg-gray-100">
            <h2 className="text-3xl font-semibold text-center mb-6">Where We Work</h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
               <MapComponent />
            </div>
         </section>

         {/* Success Stories */}
         <section className="py-16 px-6 text-black">
            <h2 className="text-3xl font-semibold text-center mb-6">Success Stories</h2>
            <div className="flex flex-wrap justify-center gap-8">
               <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-600">&quot;Through this program, I&apos;ve gained valuable skills that helped me secure a job in my community.&quot;</p>
                  <p className="mt-4 font-bold text-gray-800">- John, Participant</p>
               </div>
            </div>
         </section>
      </div>
   );
}
