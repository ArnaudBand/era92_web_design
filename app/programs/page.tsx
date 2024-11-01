"use client";

import ImpactCommunity from '@/components/ImpactCommunity';
import Programs from '@/components/ProgramInfo'
import TestimonialSlider from '@/components/TestimonialSlider';
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
   ssr: false,
});

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

         {/* Impact the communtiy */}
         <section className="py-10 px-6 text-black">
         <h2 className="text-3xl font-semibold text-center mb-6">
            Impact in the Community
         </h2>
         <ImpactCommunity />
         </section>

         {/* Success Stories */}
         <section className="py-16 px-6 text-black">
            <h2 className="text-3xl font-semibold text-center mb-6">Success Stories</h2>
            <div className="flex flex-wrap justify-center gap-8">
               <TestimonialSlider />
            </div>
         </section>
      </div>
   );
}
